import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeBookService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        const recipe = this.recipeService.getRecipeById(params['id']);
        if (recipe !== null) {
          this.recipe = recipe;
        } else {
          this.recipe = new Recipe('', '', '', []);
        }
      }
    );
  }

}
