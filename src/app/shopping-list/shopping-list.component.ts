import { Component, OnDestroy } from "@angular/core";
import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingList implements OnDestroy {

    ingredients: Ingredient[];
    private subscription: Subscription;

    constructor(private shoppingListService: ShoppingListService) {
        this.ingredients = this.shoppingListService.getIngredients();
        this.subscription = this.shoppingListService.ingredientAdded.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onSelectItem(index: number){
        this.shoppingListService.shoppingItemSelected(index);
    }
}