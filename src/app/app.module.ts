import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeItem } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeBook } from './recipe-book/recipe-book.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingList } from './shopping-list/shopping-list.component';
import { RecipeDetail } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { ShoppingListEdit } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeItem,
    RecipeBook,
    HeaderComponent,
    ShoppingList,
    RecipeDetail,
    RecipeListComponent,
    ShoppingListEdit
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
