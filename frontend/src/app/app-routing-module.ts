import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RecipedetailedComponent } from './recipedetailed/recipedetailed.component';
import { RecipesummaryComponent } from './recipesummary/recipesummary.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Makes our program go to the welcome page by default, change '/welcome' to whatever the welcome page is called
  { path: 'welcome', component: WelcomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'recipedetailed', component: RecipedetailedComponent },
  { path: 'recipesummary', component: RecipesummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
