package com.revature.tests;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.revature.model.modules.CookbookModule;
import com.revature.model.modules.LoginModule;
import com.revature.model.modules.ProfileModule;
import com.revature.model.modules.RecipeModule;
import com.revature.model.modules.SearchResultModule;
import com.revature.model.modules.WelcomeModule;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Steps {

	private WebDriver driver;
	private String websiteUrl = "";
	private CookbookModule cookbookPage;
	private LoginModule loginPage; 
	private ProfileModule profilePage;
	private RecipeModule recipePage;
	private SearchResultModule searchResultsPage;
	private WelcomeModule welcomePage;
	
	
	@BeforeEach
	public void setup() {
		
		
		System.setProperty("webdriver.chrome.driver", "C:/WebDrivers/chromedriver.exe");
		driver = new ChromeDriver();
		
		this.cookbookPage = null; 
		this.loginPage = null;
		this.profilePage = null;
		this.recipePage = null;
		this.searchResultsPage = null;
		this.welcomePage = null;
		
	}
	
	@AfterEach
	public void quit() {
		
		driver.close();
		driver.quit();
		
		this.cookbookPage = null; 
		this.loginPage = null;
		this.profilePage = null;
		this.recipePage = null;
		this.searchResultsPage = null;
		this.welcomePage = null;
		
		
	}
	
	
	@Given("I am at the recipe page while logged in")
	public void i_am_at_the_recipe_page_while_logged_in() {
		
		driver.get(websiteUrl);
		this.welcomePage = new WelcomeModule(driver);	//should be our default "page"
		
		welcomePage.navbar.hoverNavigationMenu();		//navigate to the signin page
		welcomePage.navbar.clickSigninLink();
		
		this.loginPage = new LoginModule(driver);
		loginPage.login.setUsernameField("testUser");	//set username and password to test values and click login button 
		loginPage.login.setPasswordField("password");
		loginPage.login.clickSubmit();					//should take us back to the welcome page while now signed in 
		
		//got to have some way

	}

	@When("I click add to cookbook")
	public void i_click_add_to_cookbook() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I select the default cookbook")
	public void i_select_the_default_cookbook() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I navigate to my default cookbook page")
	public void i_navigate_to_my_default_cookbook_page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see the recipe added to my default cookbook")
	public void i_should_see_the_recipe_added_to_my_default_cookbook() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Given("I am at the recipe page")
	public void i_am_at_the_recipe_page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be taken to the login page and prompted to login")
	public void i_should_be_taken_to_the_login_page_and_prompted_to_login() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}
	
	@Given("I am at the create user page")
	public void i_am_at_the_create_user_page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I enter in a username")
	public void i_enter_in_a_username() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I enter in a password and retype the password")
	public void i_enter_in_a_password_and_retype_the_password() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I enter in a firstname")
	public void i_enter_in_a_firstname() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I enter in a lastname")
	public void i_enter_in_a_lastname() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I enter in an email")
	public void i_enter_in_an_email() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I click the submit button")
	public void i_click_the_submit_button() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see a message telling me that the user has successfully been created")
	public void i_should_see_a_message_telling_me_that_the_user_has_successfully_been_created() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see a message saying that the user cannot be created because username is blank")
	public void i_should_see_a_message_saying_that_the_user_cannot_be_created_because_username_is_blank() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see a message saying that the user cannot be created because password is blank")
	public void i_should_see_a_message_saying_that_the_user_cannot_be_created_because_password_is_blank() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I enter in a password but leave retyped password blank")
	public void i_enter_in_a_password_but_leave_retyped_password_blank() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see a message saying that the user cannot be created because retyped password doesnt match")
	public void i_should_see_a_message_saying_that_the_user_cannot_be_created_because_retyped_password_doesnt_match() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see a message saying that the user cannot be created because email is blank")
	public void i_should_see_a_message_saying_that_the_user_cannot_be_created_because_email_is_blank() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}
	
	
	@When("I fill out the review text box")
	public void i_fill_out_the_review_text_box() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I click leave review")
	public void i_click_leave_review() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see my review displayed on the recipe page I am on")
	public void i_should_see_my_review_displayed_on_the_recipe_page_i_am_on() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be taken to the login page and prompted to log in")
	public void i_should_be_taken_to_the_login_page_and_prompted_to_log_in() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I fill out the review test box with too many characters")
	public void i_fill_out_the_review_test_box_with_too_many_characters() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see a message displayed informing me that reviews must be under a character limit")
	public void i_should_see_a_message_displayed_informing_me_that_reviews_must_be_under_a_character_limit() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Given("I am at the recipe page while not logged in")
	public void i_am_at_the_recipe_page_while_not_logged_in() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I click like recipe")
	public void i_click_like_recipe() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see the recipe added to my liked recipes list")
	public void i_should_see_the_recipe_added_to_my_liked_recipes_list() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I click like recipe on a recipe ive already liked")
	public void i_click_like_recipe_on_a_recipe_ive_already_liked() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see the recipe removed from my liked recieps list")
	public void i_should_see_the_recipe_removed_from_my_liked_recieps_list() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}
	
	@Given("I am at the login page")
	public void i_am_at_the_login_page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I enter in a valid username")
	public void i_enter_in_a_valid_username() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I enter in a valid password")
	public void i_enter_in_a_valid_password() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be taken to the welcome page and be able to see my name displayed")
	public void i_should_be_taken_to_the_welcome_page_and_be_able_to_see_my_name_displayed() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I enter an invalid username")
	public void i_enter_an_invalid_username() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see a message saying I have an invalid username and password combination")
	public void i_should_see_a_message_saying_i_have_an_invalid_username_and_password_combination() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I enter in an invalid password")
	public void i_enter_in_an_invalid_password() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


	@Then("I should see a message telling me that username cannot be blank")
	public void i_should_see_a_message_telling_me_that_username_cannot_be_blank() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should see a message telling me that password cannot be blank")
	public void i_should_see_a_message_telling_me_that_password_cannot_be_blank() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}
	
	
	@Given("I am at the welcome page while not logged in")
	public void i_am_at_the_welcome_page_while_not_logged_in() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I open the dropdown navigation menu")
	public void i_open_the_dropdown_navigation_menu() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I click the signin link")
	public void i_click_the_signin_link() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be taken to the login page")
	public void i_should_be_taken_to_the_login_page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Given("I am at the welcome page while logged in")
	public void i_am_at_the_welcome_page_while_logged_in() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I click the signout link")
	public void i_click_the_signout_link() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be successfully logged out")
	public void i_should_be_successfully_logged_out() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I click the website logo on the navbar")
	public void i_click_the_website_logo_on_the_navbar() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be taken to the welcome page")
	public void i_should_be_taken_to_the_welcome_page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I click the profile link")
	public void i_click_the_profile_link() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be taken to my profile page")
	public void i_should_be_taken_to_my_profile_page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Given("I am at the welcome page")
	public void i_am_at_the_welcome_page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I click the random recipe button")
	public void i_click_the_random_recipe_button() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be taken to the recipe page and shown a random recipe")
	public void i_should_be_taken_to_the_recipe_page_and_shown_a_random_recipe() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}
	
	
	@When("I enter in the name of a meal into the search bar")
	public void i_enter_in_the_name_of_a_meal_into_the_search_bar() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I click the search button")
	public void i_click_the_search_button() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be taken to the search results page and see my query displayed")
	public void i_should_be_taken_to_the_search_results_page_and_see_my_query_displayed() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I select a category from the filter dropdown")
	public void i_select_a_category_from_the_filter_dropdown() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be taken to the search results page and see my query and category filter displayed")
	public void i_should_be_taken_to_the_search_results_page_and_see_my_query_and_category_filter_displayed() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I select an area from the filter dropdown")
	public void i_select_an_area_from_the_filter_dropdown() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be taken to the search results page and see my query and area filter displayed")
	public void i_should_be_taken_to_the_search_results_page_and_see_my_query_and_area_filter_displayed() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("I select a tag from the filter dropdown")
	public void i_select_a_tag_from_the_filter_dropdown() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("I should be taken to the search results page and see my query and tag filter displayed")
	public void i_should_be_taken_to_the_search_results_page_and_see_my_query_and_tag_filter_displayed() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


	@Then("I should see a message displayed informing me I cant search for nothing")
	public void i_should_see_a_message_displayed_informing_me_i_cant_search_for_nothing() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}
	
	
	
	
	
	
}
