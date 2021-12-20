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

  recipeId : number = 0;

  constructor(recipeService: RecipeService) { 

    this.recipeService = recipeService;

  }

  ngOnInit(): void {

    this.recipeService.getRecipeIdObs().subscribe(number => this.recipeId = number);
    this.recipeService.setRecipeIdObs(5);

  }

  ngOnDestroy(): void {


  }


}
