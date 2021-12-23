import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RecipedetailedComponent } from './recipedetailed/recipedetailed.component';
import { RecipesummaryComponent } from './recipesummary/recipesummary.component';
import { LoginComponent } from './login/login.component';
import { RandomRecipeComponent } from './random-recipe/random-recipe.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RecipenameComponent } from './recipename/recipename.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Makes our program go to the welcome page by default, change '/welcome' to whatever the welcome page is called
  { path: 'welcome', component: WelcomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'recipedetailed/:id', component: RecipedetailedComponent },
  { path: 'randomrecipe', component: RandomRecipeComponent },
  { path: 'recipesummary', component: RecipesummaryComponent },
  { path: 'login-page', component: LoginComponent },
  { path: 'food-name', component: RecipenameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
