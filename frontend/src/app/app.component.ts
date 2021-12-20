import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'frontend';
  recipeSummaryDisplayed: boolean = true; 

  onToggleButtonClick() {

    this.recipeSummaryDisplayed = !this.recipeSummaryDisplayed;

  }


=======
  title = 'Cookbook';
>>>>>>> 25f5bdd23bcab4424fb06a3482883bce5145d998
}


