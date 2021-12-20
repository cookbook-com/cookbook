import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';
import { reduce } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-recipedetailed',
  templateUrl: './recipedetailed.component.html',
  styleUrls: ['./recipedetailed.component.css']
})
export class RecipedetailedComponent implements OnInit {



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

    this.recipeService.getRecipeIdObs().subscribe((data) => this.recipeToBeDisplayed.idMeal = data);
    this.getRecipeInfoById(this.recipeToBeDisplayed.idMeal);




  }

  async getRecipeInfoById(recipeId: number) {

    this.recipeToBeDisplayed = await this.recipeService.getRecipeInfoById(recipeId);

  }

  async getRandomRecipe() {

    this.recipeToBeDisplayed = await this.recipeService.getRandomRecipe();
    
  }



}
