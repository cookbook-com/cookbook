import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { FoodPicService } from '../../food-pic.service';
@Component({
  selector: 'app-pic1',
  templateUrl: './pic1.component.html',
  styleUrls: ['./pic1.component.css']
})
export class Pic1Component implements OnInit {
  data: any;
  constructor(private foodServe: FoodPicService) { }

  ngOnInit(): void {
    this.foodServe.getFoodById(52765)
    .subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }

}
