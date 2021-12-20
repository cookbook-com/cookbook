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
  
  constructor(private recipeService: RecipeService) { }
  // Push a search term into the observable stream.
  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    /*this.recipes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.recipeService.searchHeroes(term)),
    );*/
  }

}
