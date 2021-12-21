import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe.service';
//import { RecipeSearchService } from '../recipe.service'; // maybe replace later with a search service, if we make one EDIT: not needed since we get put all of our methods in recipe.ts

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  recipes$!: Observable<Recipe[]>;
  private searchTerms = new Subject<string>(); // a subject is both a source of observable values and an Observable itself. It can be subscribed the same way.
  
  userImageLink = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2Fdc4%2Foyn%2Fdc4oyngoi.jpg&f=1&nofb=1";
  logoImageLink ="https://i.pinimg.com/600x315/22/d8/c6/22d8c6d951616262123aa3e7229d7cbc.jpg";

  constructor(private recipeService: RecipeService) { }
  // Push a search term into the observable stream.
  search(term: string): void{
    this.searchTerms.next(term);
  }

  loggedInTrue:boolean= true;
  loggedInFalse:boolean= false;
  // By default a ngIf happens if the boolean is true. Since by default, you don't have to be logged in, the sign in will be displayed
  // Need to change it later to change state based on status of logged in or not based on current user, will probably need to bind it's loggedInTrue to this component
  signOut(){
    console.log("logged out");
    this.loggedInTrue = !this.loggedInTrue
    this.loggedInFalse = !this.loggedInFalse; 
  }
  signIn(){
    console.log("logged in");
    this.loggedInTrue = !this.loggedInTrue
    this.loggedInFalse = !this.loggedInFalse; 
  }

  filterOnToggle: boolean = false;
  toggleFilters(){
    // https://github.com/211018jwa/training/tree/main/week-9/mock-interview-angular-projects/group-one-app/src/app
    // toggle filter to show/ hide navbar
    this.filterOnToggle = !this.filterOnToggle
  }

  // filter by ingredient
  // filter by category ex. pasta, chicken, etc.
  // filter by area/ cuisine ex. italian, british, etc.

  ngOnInit(): void {
    this.loggedInTrue = true;
    this.loggedInFalse = false; 
    this.recipes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.recipeService.searchRecipes(term)),
    );
  }

}
