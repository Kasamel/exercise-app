import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEdit {

    @ViewChild('nameInput', { static: true }) nameContentInput: ElementRef;
    @ViewChild('amountInput', { static: true }) amountContentInput: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {
    }

    addIngridient() {
        const ingName = this.nameContentInput.nativeElement.value;
        const ingAmount = this.amountContentInput.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount);
        this.shoppingListService.addIngredient(newIngredient);
    }
}