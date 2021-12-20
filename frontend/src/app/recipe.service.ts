import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  searchHeroes(term: string): any {
    throw new Error('Method not implemented.');
  }

<<<<<<< HEAD
  private recipeId = new Subject<number>();

  constructor() { }
=======
  private recipeUrl = 'api/recipe'; //URL to web api, form of :base/collectionName.

  constructor(private http: HttpClient) { // if we're doing a message thing like in Tour of Heroes, include one here

  }
  // a lot of our Http related code will go here ex: GET recipe, user, etc, if following a structure to Tour of Heroes. 
>>>>>>> 25f5bdd23bcab4424fb06a3482883bce5145d998
}
