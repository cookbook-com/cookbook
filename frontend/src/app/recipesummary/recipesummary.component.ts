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

  constructor(recipeService: RecipeService) { 

    this.recipeService = recipeService;

  }

  ngOnInit(): void {

    this.recipeService.recipeId = 52872;

  }

  ngOnDestroy(): void {

    console.log("Summary destroyed");
    this.recipeService.recipeId = 52828; 

  }


}
