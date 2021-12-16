package com.revature.model.modules;

import org.openqa.selenium.WebDriver;

import com.revature.model.components.CreateUserComponent;
import com.revature.model.components.LoginComponent;

public class LoginModule {

	public LoginComponent login;
	public CreateUserComponent createUser; 
	
	
	public LoginModule(WebDriver driver) {
		
		this.login = new LoginComponent(driver);
		this.createUser = new CreateUserComponent(driver);
		
	}
	
}
