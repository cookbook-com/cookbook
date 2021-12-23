import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../../recipe.service';
import { FoodPicService } from 'src/app/food-pic.service';

<<<<<<< HEAD

=======
>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
@Component({
  selector: 'app-recipename',
  templateUrl: './recipename.component.html',
  styleUrls: ['./recipename.component.css']
})
export class RecipenameComponent implements OnInit {
  food: any= "";
  constructor(private foodName: FoodPicService) { }

  ngOnInit(): void {
    this.food = this.foodName.getFoodById(0);
   
  }

}
