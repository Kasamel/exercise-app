import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEdit implements OnInit, OnDestroy {

    @ViewChild('f', { static: true }) form: NgForm;
    subscription: Subscription;
    editMode = false;
    selectedItemIndex: number;
    selectedItemValue: Ingredient;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
        this.shoppingListService.ingredientSelected.subscribe(
            (index: number) => {
                this.editMode = true;
                this.selectedItemIndex = index;
                this.selectedItemValue = this.shoppingListService.getIngredient(index);
                this.form.setValue({
                    name: this.selectedItemValue.name,
                    amount: this.selectedItemValue.amount
                })
            }
        );
    }

    onSubmit(form: NgForm) {
        const formValue = form.value;
        const ingredientValue = new Ingredient(formValue.name, formValue.amount);
        if (this.editMode) {
            this.shoppingListService.updateItem(this.selectedItemIndex, ingredientValue);
        } else {
            this.shoppingListService.addIngredient(ingredientValue);
        }
        this.editMode = false;
        this.form.reset();
    }

    onClear(){
        this.form.reset();
        this.editMode = false;
    }

    onDelete(){
        this.shoppingListService.deleteByIndex(this.selectedItemIndex);
        this.onClear();
    }

    ngOnDestroy() {
        this.shoppingListService.ingredientSelected.unsubscribe();
    }
}