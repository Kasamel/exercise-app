import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html'
})
export class RecipeBook {
    currentRecipe: Recipe;

    selectedRecipe(selectedData: { recipeEl: Recipe }) {
        this.currentRecipe = selectedData.recipeEl;
    }
}