import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeItem } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeBook } from './recipe-book/recipe-book.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingList } from './shopping-list/shopping-list.component';
import { RecipeDetail } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { ShoppingListEdit } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './shared/dropdown.direcrive';
import { AppRouting } from '../app/app-routing.module';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipeBookService } from './recipe-book/recipe-book.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeItem,
    RecipeBook,
    HeaderComponent,
    ShoppingList,
    RecipeDetail,
    RecipeListComponent,
    ShoppingListEdit,
    DropdownDirective,
    RecipeEditComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
