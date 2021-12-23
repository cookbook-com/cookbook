import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipename',
  templateUrl: './recipename.component.html',
  styleUrls: ['./recipename.component.css']
})
export class RecipenameComponent implements OnInit {
  food: any= "";
  constructor(private foodName: RecipeService) { }

  ngOnInit(): void {
    this.food = this.foodName.getFood();
   
  }

}
