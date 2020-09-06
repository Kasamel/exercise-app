import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipe-book.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {

    recipes: Recipe[];
    subscription: Subscription;

    constructor(private recipeBookService: RecipeBookService,
        private activeRoute: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.subscription = this.recipeBookService.recipiesChanged.subscribe((recipies: Recipe[])=>{
            this.recipes = recipies;
        })
        this.recipes = this.recipeBookService.getRecipies();
    }

    onSelect(index: number) {
        this.router.navigate([index], { relativeTo: this.activeRoute });
    }

    onNewRecipe(){
        this.router.navigate(['create'], { relativeTo: this.activeRoute });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}