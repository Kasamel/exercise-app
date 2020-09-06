import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

    ingredientAdded = new Subject<Ingredient[]>();
    ingredientSelected = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples', 10),
        new Ingredient('lemons', 5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients = ingredients.concat(this.ingredients);
    }

    updateItem(index: number, newValue: Ingredient) {
        this.ingredients[index] = newValue;
        this.ingredientAdded.next(this.ingredients.slice());
    }

    shoppingItemSelected(index: number) {
        this.ingredientSelected.next(index);
    }

    deleteByIndex(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientAdded.next(this.ingredients.slice());
    }
}
