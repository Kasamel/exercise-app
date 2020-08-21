import { Component } from "@angular/core";
import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingList {

    ingredients: Ingredient[];

    constructor(private shoppingListService: ShoppingListService) {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientAdded.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            });
    }
}