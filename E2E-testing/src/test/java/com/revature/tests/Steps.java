package com.revature.tests;

import java.time.Duration;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.revature.model.modules.CookbookPage;
import com.revature.model.modules.LoginPage;
import com.revature.model.modules.ProfilePage;
import com.revature.model.modules.RecipeDetailedPage;
import com.revature.model.modules.RegisterPage;
import com.revature.model.modules.WelcomePage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Steps {

	private WebDriver driver;
	private WebDriverWait wdw; 
	private String websiteUrl = "http://localhost:4200"; // just for now
	private String loginUrl = "http://localhost:4200/login";
	private String profileUrl = "http://localhost:4200/userprofile";
	private String recipeUrl = "http://localhost:4200/recipedetailed/52835"; // just a random recipe for testing
																				// purposes
	private String registerUrl = "http://localhost:4200/register";
	private String welcomeUrl = "http://localhost:4200/welcome";

	private CookbookPage cookbookPage;
	private LoginPage loginPage;
	private ProfilePage profilePage;
	private RecipeDetailedPage recipePage;
	private WelcomePage welcomePage;
	private RegisterPage registerPage;

	@BeforeEach
	public void setup() {

		System.setProperty("webdriver.chrome.driver", "C:/WebDrivers/chromedriver.exe");
		driver = new ChromeDriver();

		this.cookbookPage = null;
		this.loginPage = null;
		this.profilePage = null;
		this.recipePage = null;
		this.welcomePage = null;
		this.registerPage = null;

	}

	@AfterEach
	public void quit() {

		driver.close();
		driver.quit();

		this.cookbookPage = null;
		this.loginPage = null;
		this.profilePage = null;
		this.recipePage = null;
		this.welcomePage = null;
		this.registerPage = null;

	}

	@Given("I am at the create user page")
	public void i_am_at_the_create_user_page() {

		System.setProperty("webdriver.chrome.driver", "C:/WebDrivers/chromedriver.exe");
		this.driver = new ChromeDriver();

		this.cookbookPage = null;
		this.loginPage = null;
		this.profilePage = null;
		this.recipePage = null;
		this.welcomePage = null;
		this.registerPage = null;

		driver.get(registerUrl);
		this.registerPage = new RegisterPage(driver);

	}

	@When("I enter in a username")
	public void i_enter_in_a_username() {

		this.registerPage.createUser.setUsernameField("randomUsername");

	}

	@When("I enter in a password and retype the password")
	public void i_enter_in_a_password_and_retype_the_password() {

		this.registerPage.createUser.setPasswordField("password");

	}

	@When("I enter in a firstname")
	public void i_enter_in_a_firstname() {

		this.registerPage.createUser.setFirstnameField("marshall");

	}

	@When("I enter in a lastname")
	public void i_enter_in_a_lastname() {

		this.registerPage.createUser.setLastnameField("hobbs");

	}

	@When("I enter in an email")
	public void i_enter_in_an_email() {

		this.registerPage.createUser.setEmailField("test@gmail.com");

	}

	@When("I click the submit button")
	public void i_click_the_submit_button() {

		this.registerPage.createUser.clickSubmit();

	}

	@Then("I should be taken to the login page")
	public void i_should_be_taken_to_the_login_page() {

		Assertions.assertEquals(this.loginUrl, driver.getCurrentUrl());

		driver.close();
		driver.quit();

		this.cookbookPage = null;
		this.loginPage = null;
		this.profilePage = null;
		this.recipePage = null;
		this.welcomePage = null;
		this.registerPage = null;

	}

	@Then("I should see a message saying that the user cannot be created because username is blank")
	public void i_should_see_a_message_saying_that_the_user_cannot_be_created_because_username_is_blank() {

		Assertions.assertEquals(this.registerPage.createUser.getSubmitHelperText(),
				"Unable to create new user. Username is empty");
		driver.close();
		driver.quit();

		this.cookbookPage = null;
		this.loginPage = null;
		this.profilePage = null;
		this.recipePage = null;
		this.welcomePage = null;
		this.registerPage = null;

	}

	@Then("I should see a message saying that the user cannot be created because password is blank")
	public void i_should_see_a_message_saying_that_the_user_cannot_be_created_because_password_is_blank() {

		Assertions.assertEquals(this.registerPage.createUser.getSubmitHelperText(),
				"Unable to create new user. Password is empty");
		driver.close();
		driver.quit();

		this.cookbookPage = null;
		this.loginPage = null;
		this.profilePage = null;
		this.recipePage = null;
		this.welcomePage = null;
		this.registerPage = null;

	}

	@Then("I should see a message saying that the user cannot be created because email is blank")
	public void i_should_see_a_message_saying_that_the_user_cannot_be_created_because_email_is_blank() {

		Assertions.assertEquals(this.registerPage.createUser.getSubmitHelperText(),
				"Unable to create new user. Email is empty");
		driver.close();
		driver.quit();

		this.cookbookPage = null;
		this.loginPage = null;
		this.profilePage = null;
		this.recipePage = null;
		this.welcomePage = null;
		this.registerPage = null;

	}
	
	
	@Given("I am at the login page")
	public void i_am_at_the_login_page() {
	    
		System.setProperty("webdriver.chrome.driver", "C:/WebDrivers/chromedriver.exe");
		driver = new ChromeDriver();
		wdw = new WebDriverWait(driver, Duration.ofSeconds(2));

		this.cookbookPage = null;
		this.loginPage = null;
		this.profilePage = null;
		this.recipePage = null;
		this.welcomePage = null;
		this.registerPage = null;
		
		driver.get(loginUrl);
		this.loginPage = new LoginPage(driver);
		
	}

	@When("I enter in a valid username")
	public void i_enter_in_a_valid_username() {
	    
		this.loginPage.login.setUsernameField("username");
		
	}

	@When("I enter in a valid password")
	public void i_enter_in_a_valid_password() {
		
	   this.loginPage.login.setPasswordField("password");
	   
	}
	
	@When("I click submit")
	public void i_click_submit() {
	    
		this.loginPage.login.clickSubmit();
		
	}

	@Then("I should be taken to the welcome page and be able to see my name displayed")	//Really just checking we get redirected to the welcome page now
	public void i_should_be_taken_to_the_welcome_page_and_be_able_to_see_my_name_displayed() {

		wdw.until(ExpectedConditions.urlToBe(welcomeUrl));
		
		Assertions.assertEquals(this.welcomeUrl, driver.getCurrentUrl());
		
	}

	@When("I enter an invalid username")
	public void i_enter_an_invalid_username() {
		
		this.loginPage.login.setUsernameField("SomeRandomUsernameThatNooneProbablyHas");
		
	}

	@Then("I should see a message saying I have an invalid username and password combination")
	public void i_should_see_a_message_saying_i_have_an_invalid_username_and_password_combination() {
	    
		Assertions.assertEquals(this.loginPage.login.getSubmitHelperText(), "Failed to login, please check username and/or password");
		
	}

	@When("I enter in an invalid password")
	public void i_enter_in_an_invalid_password() {
	    
		this.loginPage.login.setPasswordField("SomeRandomPasswordThatIHopeNooneHas");
		
	}


	@Then("I should see a message telling me that username cannot be blank")
	public void i_should_see_a_message_telling_me_that_username_cannot_be_blank() {
	    
		Assertions.assertEquals(this.loginPage.login.getSubmitHelperText(), "Please enter a username");
		
	}

	@Then("I should see a message telling me that password cannot be blank")
	public void i_should_see_a_message_telling_me_that_password_cannot_be_blank() {
	    
		Assertions.assertEquals(this.loginPage.login.getSubmitHelperText(), "Please enter a password");
		
	}


}
