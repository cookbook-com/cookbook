import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Provides NgModel

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CookbookdetailedComponent } from './cookbookdetailed/cookbookdetailed.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';
import { RecipedetailedComponent } from './recipedetailed/recipedetailed.component';
import { RecipesummaryComponent } from './recipesummary/recipesummary.component';
import { AppRoutingModule } from './app-routing-module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RandomRecipeComponent } from './random-recipe/random-recipe.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    CookbookdetailedComponent,
    CreateuserComponent,
    LoginComponent,
    RecipedetailedComponent,
    RecipesummaryComponent,
    WelcomeComponent,
    UserProfileComponent,
    RandomRecipeComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
