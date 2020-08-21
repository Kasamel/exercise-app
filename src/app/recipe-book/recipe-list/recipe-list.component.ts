import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipe-book.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[];

    constructor(private recipeBookService: RecipeBookService,
        private activeRoute: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.recipes = this.recipeBookService.getRecipies();
    }

    onSelect(index: number) {
        this.router.navigate([index], { relativeTo: this.activeRoute });
    }

    onNewRecipe(){
        this.router.navigate(['create'], { relativeTo: this.activeRoute });
    }
}