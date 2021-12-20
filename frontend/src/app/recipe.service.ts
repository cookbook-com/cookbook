import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, reduce, Subject } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  searchHeroes(term: string): any {
    throw new Error('Method not implemented.');
  }

  recipeIdDetailed$ : Subject<number> = new Subject();
  client! : HttpClient;


  private recipeUrl = 'api/recipe'; //URL to web api, form of :base/collectionName.

  constructor(http: HttpClient) { // if we're doing a message thing like in Tour of Heroes, include one here

    this.client = http;

  }

  getRecipeIdObs() : Observable<number> {

    return this.recipeIdDetailed$.asObservable();

  }
  
  setRecipeIdObs( recipeId : number) {

    this.recipeIdDetailed$.next(recipeId);

  }

  async getRecipeInfoById(recipeId: number) : Promise<Recipe> {

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`, {

      method: 'GET'

    });

    let data = await res.json();
    
    let recipe = data.meals[0];
    return recipe;

  

  }

  async getRandomRecipe() : Promise<Recipe> {

    let res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {

      method: 'GET'

    })

    let data = await res.json();

    let recipe = data.meals[0];
    return recipe; 

  }

  // a lot of our Http related code will go here ex: GET recipe, user, etc, if following a structure to Tour of Heroes. 
}
