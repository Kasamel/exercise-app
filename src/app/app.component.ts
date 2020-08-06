import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navigationType: string;

  recipeBookSelected(navigationTypeSelected: { navigationType: string }) {
    this.navigationType = navigationTypeSelected.navigationType;
  
  }

}
