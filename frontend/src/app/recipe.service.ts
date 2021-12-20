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
    
    let proto = data.meals[0];
    let ingredients : Array<string> = new Array<string>(); 
    let ingredient : string = "";


    if(proto.strIngredient1.length > 0 && proto.strMeasure1.length > 0 && proto.strIngredient1 !== null && proto.strMeasure1 !== null) {

      ingredient = proto.strMeasure1 + " " + proto.strIngredient1;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient2.length > 0 && proto.strMeasure2.length > 0 && proto.strIngredient2 !== null && proto.strMeasure2 !== null) {

      ingredient = proto.strMeasure2 + " " + proto.strIngredient2;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient3.length > 0 && proto.strMeasure3.length > 0 && proto.strIngredient3 !== null && proto.strMeasure3 !== null) {

      ingredient = proto.strMeasure3 + " " + proto.strIngredient3;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient4.length > 0 && proto.strMeasure4.length > 0 && proto.strIngredient4 !== null && proto.strMeasure4 !== null ) {

      ingredient = proto.strMeasure4 + " " + proto.strIngredient4;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient5.length > 0 && proto.strMeasure5.length > 0 && proto.strIngredient5 !== null && proto.strMeasure5 !== null) {

      ingredient = proto.strMeasure5 + " " + proto.strIngredient5;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient6.length > 0 && proto.strMeasure6.length > 0 && proto.strIngredient6 !== null && proto.strMeasure6 !== null) {

      ingredient = proto.strMeasure6 + " " + proto.strIngredient6;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient7.length > 0 && proto.strMeasure7.length > 0 && proto.strIngredient7 !== null && proto.strMeasure7 !== null) {

      ingredient = proto.strMeasure7 + " " + proto.strIngredient7;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient8.length > 0 && proto.strMeasure8.length > 0 && proto.strIngredient8 !== null && proto.strMeasure8 !== null)  {

      ingredient = proto.strMeasure8 + " " + proto.strIngredient8;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient9.length > 0 && proto.strMeasure9.length > 0 && proto.strIngredient9 !== null && proto.strMeasure9 !== null ) {

      ingredient = proto.strMeasure9 + " " + proto.strIngredient9;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient10.length > 0 && proto.strMeasure10.length > 0 && proto.strIngredient10 !== null && proto.strMeasure10 !== null) {

      ingredient = proto.strMeasure10 + " " + proto.strIngredient10;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient11.length > 0 && proto.strMeasure11.length > 0 && proto.strIngredient11 !== null && proto.strMeasure11 !== null) {

      ingredient = proto.strMeasure11 + " " + proto.strIngredient11;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient12.length > 0 && proto.strMeasure12.length > 0 && proto.strIngredient12 !== null && proto.strMeasure12 !== null) {

      ingredient = proto.strMeasure12 + " " + proto.strIngredient12;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient13.length > 0 && proto.strMeasure13.length > 0 && proto.strIngredient13 !== null && proto.strMeasure13 !== null) {

      ingredient = proto.strMeasure13 + " " + proto.strIngredient13;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient14.length > 0 && proto.strMeasure14.length > 0 && proto.strIngredient14 !== null && proto.strMeasure14 !== null) {

      ingredient = proto.strMeasure14 + " " + proto.strIngredient14;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient15.length > 0 && proto.strMeasure15.length > 0 && proto.strIngredient15 !== null && proto.strMeasure15 !== null) {

      ingredient = proto.strMeasure15 + " " + proto.strIngredient15;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient16.length > 0 && proto.strMeasure16.length > 0 && proto.strIngredient16 !== null && proto.strMeasure16 !== null) {

      ingredient = proto.strMeasure16 + " " + proto.strIngredient16;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient17.length > 0 && proto.strMeasure17.length > 0 && proto.strIngredient17 !== null && proto.strMeasure17 !== null) {

      ingredient = proto.strMeasure17 + " " + proto.strIngredient17;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient18.length > 0 && proto.strMeasure18.length > 0 && proto.strIngredient18 !== null && proto.strMeasure18 !== null) {

      ingredient = proto.strMeasure18 + " " + proto.strIngredient18;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient19.length > 0 && proto.strMeasure19.length > 0 && proto.strIngredient19 !== null && proto.strMeasure19 !== null) {

      ingredient = proto.strMeasure19 + " " + proto.strIngredient19;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient20.length > 0 && proto.strMeasure20.length > 0 && proto.strIngredient20 !== null && proto.strMeasure20 !== null) {

      ingredient = proto.strMeasure20 + " " + proto.strIngredient20;
      ingredients.push(ingredient);

    }
 

    //yes I know. I had no choice. The API names each ingredient and each ingredient measurement as their own, separately named variables. Terrifying 

    let recipe : Recipe = proto; 
    recipe.strIngredients = ingredients;

    return recipe;

  

  }

  async getRandomRecipe() : Promise<Recipe> {

    let res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {

      method: 'GET'

    })

    let data = await res.json();

    let proto = data.meals[0];
    let ingredients : Array<string> = new Array<string>(); 
    let ingredient : string = "";


    if(proto.strIngredient1.length > 0 && proto.strMeasure1.length > 0 && proto.strIngredient1 !== null && proto.strMeasure1 !== null) {

      ingredient = proto.strMeasure1 + " " + proto.strIngredient1;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient2.length > 0 && proto.strMeasure2.length > 0 && proto.strIngredient2 !== null && proto.strMeasure2 !== null) {

      ingredient = proto.strMeasure2 + " " + proto.strIngredient2;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient3.length > 0 && proto.strMeasure3.length > 0 && proto.strIngredient3 !== null && proto.strMeasure3 !== null) {

      ingredient = proto.strMeasure3 + " " + proto.strIngredient3;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient4.length > 0 && proto.strMeasure4.length > 0 && proto.strIngredient4 !== null && proto.strMeasure4 !== null ) {

      ingredient = proto.strMeasure4 + " " + proto.strIngredient4;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient5.length > 0 && proto.strMeasure5.length > 0 && proto.strIngredient5 !== null && proto.strMeasure5 !== null) {

      ingredient = proto.strMeasure5 + " " + proto.strIngredient5;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient6.length > 0 && proto.strMeasure6.length > 0 && proto.strIngredient6 !== null && proto.strMeasure6 !== null) {

      ingredient = proto.strMeasure6 + " " + proto.strIngredient6;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient7.length > 0 && proto.strMeasure7.length > 0 && proto.strIngredient7 !== null && proto.strMeasure7 !== null) {

      ingredient = proto.strMeasure7 + " " + proto.strIngredient7;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient8.length > 0 && proto.strMeasure8.length > 0 && proto.strIngredient8 !== null && proto.strMeasure8 !== null)  {

      ingredient = proto.strMeasure8 + " " + proto.strIngredient8;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient9.length > 0 && proto.strMeasure9.length > 0 && proto.strIngredient9 !== null && proto.strMeasure9 !== null ) {

      ingredient = proto.strMeasure9 + " " + proto.strIngredient9;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient10.length > 0 && proto.strMeasure10.length > 0 && proto.strIngredient10 !== null && proto.strMeasure10 !== null) {

      ingredient = proto.strMeasure10 + " " + proto.strIngredient10;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient11.length > 0 && proto.strMeasure11.length > 0 && proto.strIngredient11 !== null && proto.strMeasure11 !== null) {

      ingredient = proto.strMeasure11 + " " + proto.strIngredient11;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient12.length > 0 && proto.strMeasure12.length > 0 && proto.strIngredient12 !== null && proto.strMeasure12 !== null) {

      ingredient = proto.strMeasure12 + " " + proto.strIngredient12;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient13.length > 0 && proto.strMeasure13.length > 0 && proto.strIngredient13 !== null && proto.strMeasure13 !== null) {

      ingredient = proto.strMeasure13 + " " + proto.strIngredient13;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient14.length > 0 && proto.strMeasure14.length > 0 && proto.strIngredient14 !== null && proto.strMeasure14 !== null) {

      ingredient = proto.strMeasure14 + " " + proto.strIngredient14;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient15.length > 0 && proto.strMeasure15.length > 0 && proto.strIngredient15 !== null && proto.strMeasure15 !== null) {

      ingredient = proto.strMeasure15 + " " + proto.strIngredient15;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient16.length > 0 && proto.strMeasure16.length > 0 && proto.strIngredient16 !== null && proto.strMeasure16 !== null) {

      ingredient = proto.strMeasure16 + " " + proto.strIngredient16;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient17.length > 0 && proto.strMeasure17.length > 0 && proto.strIngredient17 !== null && proto.strMeasure17 !== null) {

      ingredient = proto.strMeasure17 + " " + proto.strIngredient17;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient18.length > 0 && proto.strMeasure18.length > 0 && proto.strIngredient18 !== null && proto.strMeasure18 !== null) {

      ingredient = proto.strMeasure18 + " " + proto.strIngredient18;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient19.length > 0 && proto.strMeasure19.length > 0 && proto.strIngredient19 !== null && proto.strMeasure19 !== null) {

      ingredient = proto.strMeasure19 + " " + proto.strIngredient19;
      ingredients.push(ingredient);

    }
    if(proto.strIngredient20.length > 0 && proto.strMeasure20.length > 0 && proto.strIngredient20 !== null && proto.strMeasure20 !== null) {

      ingredient = proto.strMeasure20 + " " + proto.strIngredient20;
      ingredients.push(ingredient);

    }

    
    //this should be tried as a war crime. I officially hate this api

    let recipe : Recipe = proto; 
    recipe.strIngredients = ingredients;

    return recipe;

  }

  // a lot of our Http related code will go here ex: GET recipe, user, etc, if following a structure to Tour of Heroes. 
}
