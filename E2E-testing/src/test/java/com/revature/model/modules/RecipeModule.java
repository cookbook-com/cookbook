package com.revature.model.modules;

import org.openqa.selenium.WebDriver;

import com.revature.model.components.NavbarComponent;
import com.revature.model.components.RecipeDetailedComponent;

public class RecipeModule {

	public NavbarComponent navbar;
	public RecipeDetailedComponent recipeDetailed; 
	
	
	public RecipeModule(WebDriver driver) {
		
		this.navbar = new NavbarComponent(driver);
		this.recipeDetailed = new RecipeDetailedComponent(driver);
		
	}
	
}
