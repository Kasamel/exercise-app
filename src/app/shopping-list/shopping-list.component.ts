import { Component } from "@angular/core";

import { Ingredient } from '../shared/ingridient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingList {

    ingredients: Ingredient[] = [
        new Ingredient('apples', 10),
        new Ingredient('lemons', 5)
    ];

    constructor() {
    }
    addIngridientToList(ingreditentData: Ingredient) {
        this.ingredients.push(ingreditentData);
    }
}