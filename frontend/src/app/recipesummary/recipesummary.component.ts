import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipesummary',
  templateUrl: './recipesummary.component.html',
  styleUrls: ['./recipesummary.component.css']
})
export class RecipesummaryComponent implements OnInit {

  recipeService!: RecipeService;

  recipeToBeDisplayed: Recipe = { 

    idMeal: 0,
    strMeal: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strInstructions: "",
    strMealThumb: ""

  };


  constructor(recipeService: RecipeService) { 

    this.recipeService = recipeService;

  }

  ngOnInit(): void {


  }

  ngOnDestroy(): void {

    this.recipeService.setRecipeIdObs(this.recipeToBeDisplayed.idMeal);

  }


}
