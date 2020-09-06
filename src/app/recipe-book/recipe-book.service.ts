import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingridient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeBookService {

    recipiesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'It\'s meat',
            'Good cooked meat',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Salad', 2)
            ]
        ),
        new Recipe(
            'It\'s pizza',
            'Good looking pizza',
            'https://cdn.pixabay.com/photo/2018/10/27/14/21/pizza-3776605_960_720.jpg',
            [
                new Ingredient('Tomatoes', 2),
                new Ingredient('Salad', 2)
            ]
        )
    ];

    constructor(){
    }

    getRecipies() {
        return this.recipes.slice();
    }

    getRecipeById(index: number){
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipiesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipiesChanged.next(this.recipes.slice());
    }

    deleteByIndex(index: number){
        this.recipes.splice(index,1);
        this.recipiesChanged.next(this.recipes.slice());
    }
}