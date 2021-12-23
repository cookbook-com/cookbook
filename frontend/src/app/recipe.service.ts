import { HttpClient } from '@angular/common/http';
// HttpHeaders https://www.tektutorialshub.com/angular/angular-httpheaders/
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of, reduce, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// for the import above https://www.learnrxjs.io/learn-rxjs/operators/error_handling/catch or https://blog.angular-university.io/rxjs-error-handling/
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  /* GET recipe whose name contains search terms*/
  searchRecipes(term: string): Observable<Recipe[]> { // used to say searchHeroes
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Recipe[]>(`${this.recipeUrl}/${term}`).pipe(tap(x => x.length ? this.log(`found recipe matching "${term}"`) :
      this.log(`no recipe matching "${term}"`)), catchError(this.handleError<Recipe[]>('searchRecipes', [])));
    // The method returns immediately with an empty array if there is no search term. It is similar to getHeroes() but the URLis different, 
    // which includes a query string with the search term.
  }

  recipeIdDetailed$: Subject<number> = new Subject(); // throwing a error for some reason - Raf
  client!: HttpClient; // Might not be needed as the constructor includes, private http: HttpClient - Raf


  private recipeUrl = 'https://themealdb.com/api/json/v1/1/search.php?s='; //URL to web api, form of :base/collectionName.

  constructor(private http: HttpClient) { // if we're doing a message thing like in Tour of Heroes, include one here
    // might not need this - Raf
    this.client = http;

  }
  /* Might be useful - Raf, taken from ToH (Tour of Heroes)
   - GET heroes from the server 
   getHeroes(): Observable<Hero[]> { // converted to use HttpClient, an observable of HttpClient always emits a single value and then completes
    return this.http.get<Hero[]>(this.heroesUrl).pipe(tap(_ => this.log('fetched heroes')), catchError(this.handleError<Hero[]>('getHeroes',[]))); 
    // returns an Observable of hero arrays, returning only a single hero array
    // httpClient.get() returns the body of the response as an untyped JSON object by default. By adding something like <Hero[]>, 
    // it adds TypeScript capabilities, reducing errors during compile time
    // the server's data api determines the shape of the JSON data, in this project it returns the hero data as an array.
    // some APIs may bury the data within an object. Get the data out by processing the Observable result with the RxJS map() operator
    // tap() will look at the observable values, do nothing with them, and pass them along
  }
  */

  getRecipeIdObs(): Observable<number> {

    return this.recipeIdDetailed$.asObservable();

  }

  setRecipeIdObs(recipeId: number) {

    this.recipeIdDetailed$.next(recipeId);

  }

  async getRecipeInfoById(recipeId: number): Promise<Recipe> {

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`, {

      method: 'GET'

    });

    let data = await res.json();

    let proto = data.meals[0];
    let ingredients: Array<string> = new Array<string>();
    let ingredient: string = "";


    if (proto.strIngredient1 !== null && proto.strMeasure1 !== null && proto.strIngredient1.length > 0 && proto.strMeasure1.length > 0) {

      ingredient = proto.strMeasure1 + " " + proto.strIngredient1;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient2 !== null && proto.strMeasure2 !== null && proto.strIngredient2.length > 0 && proto.strMeasure2.length > 0) {

      ingredient = proto.strMeasure2 + " " + proto.strIngredient2;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient3 !== null && proto.strMeasure3 !== null && proto.strIngredient3.length > 0 && proto.strMeasure3.length > 0) {

      ingredient = proto.strMeasure3 + " " + proto.strIngredient3;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient4 !== null && proto.strMeasure4 !== null && proto.strIngredient4.length > 0 && proto.strMeasure4.length > 0) {

      ingredient = proto.strMeasure4 + " " + proto.strIngredient4;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient5 !== null && proto.strMeasure5 !== null && proto.strIngredient5.length > 0 && proto.strMeasure5.length > 0) {

      ingredient = proto.strMeasure5 + " " + proto.strIngredient5;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient6 !== null && proto.strMeasure6 !== null && proto.strIngredient6.length > 0 && proto.strMeasure6.length > 0) {

      ingredient = proto.strMeasure6 + " " + proto.strIngredient6;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient7 !== null && proto.strMeasure7 !== null && proto.strIngredient7.length > 0 && proto.strMeasure7.length > 0) {

      ingredient = proto.strMeasure7 + " " + proto.strIngredient7;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient8 !== null && proto.strMeasure8 !== null && proto.strIngredient8.length > 0 && proto.strMeasure8.length > 0) {

      ingredient = proto.strMeasure8 + " " + proto.strIngredient8;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient9 !== null && proto.strMeasure9 !== null && proto.strIngredient9.length > 0 && proto.strMeasure9.length > 0) {

      ingredient = proto.strMeasure9 + " " + proto.strIngredient9;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient10 !== null && proto.strMeasure10 !== null && proto.strIngredient10.length > 0 && proto.strMeasure10.length > 0) {

      ingredient = proto.strMeasure10 + " " + proto.strIngredient10;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient11 !== null && proto.strMeasure11 !== null && proto.strIngredient11.length > 0 && proto.strMeasure11.length > 0) {

      ingredient = proto.strMeasure11 + " " + proto.strIngredient11;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient12 !== null && proto.strMeasure12 !== null && proto.strIngredient12.length > 0 && proto.strMeasure12.length > 0) {

      ingredient = proto.strMeasure12 + " " + proto.strIngredient12;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient13 !== null && proto.strMeasure13 !== null && proto.strIngredient13.length > 0 && proto.strMeasure13.length > 0) {

      ingredient = proto.strMeasure13 + " " + proto.strIngredient13;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient14 !== null && proto.strMeasure14 !== null && proto.strIngredient14.length > 0 && proto.strMeasure14.length > 0) {

      ingredient = proto.strMeasure14 + " " + proto.strIngredient14;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient15 !== null && proto.strMeasure15 !== null && proto.strIngredient15.length > 0 && proto.strMeasure15.length > 0) {

      ingredient = proto.strMeasure15 + " " + proto.strIngredient15;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient16 !== null && proto.strMeasure16 !== null && proto.strIngredient16.length > 0 && proto.strMeasure16.length > 0) {

      ingredient = proto.strMeasure16 + " " + proto.strIngredient16;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient17 !== null && proto.strMeasure17 !== null && proto.strIngredient17.length > 0 && proto.strMeasure17.length > 0) {

      ingredient = proto.strMeasure17 + " " + proto.strIngredient17;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient18 !== null && proto.strMeasure18 !== null && proto.strIngredient18.length > 0 && proto.strMeasure18.length > 0) {

      ingredient = proto.strMeasure18 + " " + proto.strIngredient18;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient19 !== null && proto.strMeasure19 !== null && proto.strIngredient19.length > 0 && proto.strMeasure19.length > 0) {

      ingredient = proto.strMeasure19 + " " + proto.strIngredient19;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient20 !== null && proto.strMeasure20 !== null && proto.strIngredient20.length > 0 && proto.strMeasure20.length > 0) {

      ingredient = proto.strMeasure20 + " " + proto.strIngredient20;
      ingredients.push(ingredient);

    }


    //yes I know. I had no choice. The API names each ingredient and each ingredient measurement as their own, separately named variables. Terrifying 

    let recipe: Recipe = proto;
    recipe.strIngredients = ingredients;

    return recipe;



  }

  async getRandomRecipe(): Promise<Recipe> {

    let res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {

      method: 'GET'

    })

    let data = await res.json();

    let proto = data.meals[0];
    let ingredients: Array<string> = new Array<string>();
    let ingredient: string = "";


    if (proto.strIngredient1 !== null && proto.strMeasure1 !== null && proto.strIngredient1.length > 0 && proto.strMeasure1.length > 0) {

      ingredient = proto.strMeasure1 + " " + proto.strIngredient1;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient2 !== null && proto.strMeasure2 !== null && proto.strIngredient2.length > 0 && proto.strMeasure2.length > 0) {

      ingredient = proto.strMeasure2 + " " + proto.strIngredient2;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient3 !== null && proto.strMeasure3 !== null && proto.strIngredient3.length > 0 && proto.strMeasure3.length > 0) {

      ingredient = proto.strMeasure3 + " " + proto.strIngredient3;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient4 !== null && proto.strMeasure4 !== null && proto.strIngredient4.length > 0 && proto.strMeasure4.length > 0) {

      ingredient = proto.strMeasure4 + " " + proto.strIngredient4;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient5 !== null && proto.strMeasure5 !== null && proto.strIngredient5.length > 0 && proto.strMeasure5.length > 0) {

      ingredient = proto.strMeasure5 + " " + proto.strIngredient5;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient6 !== null && proto.strMeasure6 !== null && proto.strIngredient6.length > 0 && proto.strMeasure6.length > 0) {

      ingredient = proto.strMeasure6 + " " + proto.strIngredient6;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient7 !== null && proto.strMeasure7 !== null && proto.strIngredient7.length > 0 && proto.strMeasure7.length > 0) {

      ingredient = proto.strMeasure7 + " " + proto.strIngredient7;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient8 !== null && proto.strMeasure8 !== null && proto.strIngredient8.length > 0 && proto.strMeasure8.length > 0) {

      ingredient = proto.strMeasure8 + " " + proto.strIngredient8;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient9 !== null && proto.strMeasure9 !== null && proto.strIngredient9.length > 0 && proto.strMeasure9.length > 0) {

      ingredient = proto.strMeasure9 + " " + proto.strIngredient9;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient10 !== null && proto.strMeasure10 !== null && proto.strIngredient10.length > 0 && proto.strMeasure10.length > 0) {

      ingredient = proto.strMeasure10 + " " + proto.strIngredient10;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient11 !== null && proto.strMeasure11 !== null && proto.strIngredient11.length > 0 && proto.strMeasure11.length > 0) {

      ingredient = proto.strMeasure11 + " " + proto.strIngredient11;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient12 !== null && proto.strMeasure12 !== null && proto.strIngredient12.length > 0 && proto.strMeasure12.length > 0) {

      ingredient = proto.strMeasure12 + " " + proto.strIngredient12;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient13 !== null && proto.strMeasure13 !== null && proto.strIngredient13.length > 0 && proto.strMeasure13.length > 0) {

      ingredient = proto.strMeasure13 + " " + proto.strIngredient13;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient14 !== null && proto.strMeasure14 !== null && proto.strIngredient14.length > 0 && proto.strMeasure14.length > 0) {

      ingredient = proto.strMeasure14 + " " + proto.strIngredient14;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient15 !== null && proto.strMeasure15 !== null && proto.strIngredient15.length > 0 && proto.strMeasure15.length > 0) {

      ingredient = proto.strMeasure15 + " " + proto.strIngredient15;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient16 !== null && proto.strMeasure16 !== null && proto.strIngredient16.length > 0 && proto.strMeasure16.length > 0) {

      ingredient = proto.strMeasure16 + " " + proto.strIngredient16;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient17 !== null && proto.strMeasure17 !== null && proto.strIngredient17.length > 0 && proto.strMeasure17.length > 0) {

      ingredient = proto.strMeasure17 + " " + proto.strIngredient17;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient18 !== null && proto.strMeasure18 !== null && proto.strIngredient18.length > 0 && proto.strMeasure18.length > 0) {

      ingredient = proto.strMeasure18 + " " + proto.strIngredient18;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient19 !== null && proto.strMeasure19 !== null && proto.strIngredient19.length > 0 && proto.strMeasure19.length > 0) {

      ingredient = proto.strMeasure19 + " " + proto.strIngredient19;
      ingredients.push(ingredient);

    }
    if (proto.strIngredient20 !== null && proto.strMeasure20 !== null && proto.strIngredient20.length > 0 && proto.strMeasure20.length > 0) {

      ingredient = proto.strMeasure20 + " " + proto.strIngredient20;
      ingredients.push(ingredient);

    }


    //this should be tried as a war crime. I officially hate this api

    let recipe: Recipe = proto;
    recipe.strIngredients = ingredients;

    return recipe;

  }


  /** From ToH
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    // this.messageService.add(`RecipeService: ${message}`);
    // not sure what to replace with this if we're not doing a message component/ service like in ToH
  }

  // a lot of our Http related code will go here ex: GET recipe, user, etc, if following a structure to Tour of Heroes. 


getFood() {  
  let url="/recipesummary/"; 
  return this.http.get( url );
}
}
