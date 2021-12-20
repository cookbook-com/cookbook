import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  recipeSummaryDisplayed: boolean = true; 

  onToggleButtonClick() {

    this.recipeSummaryDisplayed = !this.recipeSummaryDisplayed;

  }


}


