import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({providedIn: 'root'})
export class RecipeBookService {

    recipes: Recipe[] = [
        new Recipe('It\'s meat', 'Good cooked meat', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('It\'s pizza', 'Good looking pizza', 'https://cdn.pixabay.com/photo/2018/10/27/14/21/pizza-3776605_960_720.jpg')
    ];

    getRecipies() {
        return this.recipes.slice();
    }
}