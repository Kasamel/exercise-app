import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipe-book.service'

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

    @Output() selectRecipe = new EventEmitter<{ recipeEl: Recipe }>();
    recipes: Recipe[];

    constructor(private recipeBookService: RecipeBookService) {
     }

    ngOnInit() {
        this.recipes = this.recipeBookService.getRecipies();
    }

    onSelect(recipe: Recipe) {
        this.selectRecipe.emit({ recipeEl: recipe });
    }
}