import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-recipedetailed',
  templateUrl: './recipedetailed.component.html',
  styleUrls: ['./recipedetailed.component.css']
})
export class RecipedetailedComponent implements OnInit {



  recipeId: number = 0;
  imageLink: string = '';

  recipeToBeDisplayed: Recipe = { 

    idMeal: 0,
    strMeal: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strInstructions: "",
    strMealThumb: ""

  };

  recipeService!: RecipeService;


  constructor(recipeService: RecipeService) {

    this.recipeService = recipeService;

   }

  ngOnInit(): void {

    this.recipeService.getRecipeIdObs().subscribe(number => this.recipeId = number);



  }

  async getRecipeInfoById(recipeId: number) {

    try{

      console.log(recipeId);
      let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`, {

        method: 'GET'

      });

      let data = await res.json(); 

      this.recipeToBeDisplayed = data.meals[0];
      console.log(this.recipeToBeDisplayed);

    } catch(err) {

      console.log(err);

    }

  }

  async getRecipeInfo() {

    try {

      let res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {

        method: 'GET'

      });

      let data = await res.json();

      this.recipeToBeDisplayed = data.meals[0];
      console.log(this.recipeToBeDisplayed);

    } catch(err) {

      console.log(err);

    }


  }



}
