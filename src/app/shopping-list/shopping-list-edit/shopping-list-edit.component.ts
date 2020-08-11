import { Component, ViewChild, EventEmitter, ElementRef, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingridient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEdit {

    @ViewChild('nameInput', { static: true }) nameContentInput: ElementRef;
    @ViewChild('amountInput', { static: true }) amountContentInput: ElementRef;
    @Output() ingredientAdd = new EventEmitter<Ingredient>();

    addIngridient() {
        const ingName = this.nameContentInput.nativeElement.value;
        const ingAmount = this.amountContentInput.nativeElement.value;
        const newIngridient = new Ingredient(ingName,ingAmount);
        this.ingredientAdd.emit(newIngridient);
    }
}