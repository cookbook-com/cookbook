package com.revature.model.modules;

import org.openqa.selenium.WebDriver;

import com.revature.model.components.NavbarComponent;
import com.revature.model.components.RecipeSummaryComponent;

public class WelcomeModule {

	
	public NavbarComponent navbar;
	public RecipeSummaryComponent recipeSummary; 
	public String url = "";
	
	public WelcomeModule(WebDriver driver) {
		
		this.navbar = new NavbarComponent(driver);
		this.recipeSummary = new RecipeSummaryComponent(driver);
		
	}
	
	
}
