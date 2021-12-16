import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CookbookdetailedComponent } from './cookbookdetailed/cookbookdetailed.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';
import { RecipedetailedComponent } from './recipedetailed/recipedetailed.component';
import { RecipesummaryComponent } from './recipesummary/recipesummary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CookbookdetailedComponent,
    CreateuserComponent,
    LoginComponent,
    RecipedetailedComponent,
    RecipesummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
