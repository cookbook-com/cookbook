import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  searchHeroes(term: string): any {
    throw new Error('Method not implemented.');
  }

  recipeId$ : Subject<number> = new Subject();

  private recipeUrl = 'api/recipe'; //URL to web api, form of :base/collectionName.

  constructor(private http: HttpClient) { // if we're doing a message thing like in Tour of Heroes, include one here

  }

  getRecipeIdObs() : Observable<number> {

    return this.recipeId$.asObservable();

  }
  
  setRecipeIdObs( recipeId : number) {

    this.recipeId$.next(recipeId);

  }

  // a lot of our Http related code will go here ex: GET recipe, user, etc, if following a structure to Tour of Heroes. 
}
