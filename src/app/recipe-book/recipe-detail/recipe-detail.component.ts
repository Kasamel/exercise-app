import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipe-book.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetail implements OnInit {

    @Input() currentRecipe: Recipe;

    constructor(private recipeService: RecipeBookService, 
            private shoppingListService: ShoppingListService,
            private activeRoute: ActivatedRoute,
            private router: Router) {
    }

    ngOnInit(){
        this.currentRecipe = this.recipeService.getRecipeById(this.activeRoute.snapshot.params['id']);
        this.activeRoute.params.subscribe(
            (params: Params)=>{
                this.currentRecipe = this.recipeService.getRecipeById(params['id']);
            }
        );
    }

    addToShoppingList(){
        this.shoppingListService.addIngredients(this.currentRecipe.ingredients);
        this.router.navigate(['/shopping-list']);
    }
}