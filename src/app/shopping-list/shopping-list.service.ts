import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

    ingredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples', 10),
        new Ingredient('lemons', 5)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients = ingredients.concat(this.ingredients);
    }
}
