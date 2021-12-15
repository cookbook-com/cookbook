package com.revature.model.components;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class NavbarComponent {

	//Oh this one is going to be complicated.....lots of functionality..yay...
	
	private WebDriver driver; 
	private WebDriverWait wdw; 
	
	@FindBy(xpath = "")
	private WebElement searchField;
	
	@FindBy(xpath = "")
	private WebElement searchButton; 
	
	@FindBy(xpath = "")
	private WebElement logoHomeButton;
	
	@FindBy(xpath = "")
	private WebElement navigationMenuDropdown;
	
	@FindBy(xpath = "")
	private WebElement profileLink;
	
	@FindBy(xpath = "")
	private WebElement signinLink;
	
	@FindBy(xpath = "")
	private WebElement signoutLink;
	
	@FindBy(xpath = "")
	private WebElement filterDropdown;
	
	@FindBy(xpath = "")
	private WebElement categoryDropdown;
	
	@FindBy(xpath = "")
	private WebElement areaDropdown; 
	
	@FindBy(xpath = "")
	private WebElement tagsDropdown;
	
	//Need to add other webelements for any links that are under these filter dropdowns
	
	public String getSearchText() {
		
		return wdw.until(ExpectedConditions.visibilityOf(searchField)).getText();
		
	}
	
	public void clickSearch() {
		
		wdw.until(ExpectedConditions.visibilityOf(searchButton)).click();
		
	}
	
	public void clickHome() {
		
		wdw.until(ExpectedConditions.visibilityOf(logoHomeButton)).click();
		
	}
	
	public void hoverNavigationMenu() {
		
		
		
	}
	
	
}
