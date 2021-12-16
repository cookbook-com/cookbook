package com.revature.model.components;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CreateUserComponent {

	
	private WebDriver driver; 
	private WebDriverWait wdw;
	
	@FindBy(xpath = "")
	private WebElement usernameField;
	
	@FindBy(xpath = "")
	private WebElement passwordField;
	
	@FindBy(xpath = "")
	private WebElement retypePasswordField;
	
	@FindBy(xpath = "")
	private WebElement emailField; 
	
	@FindBy(xpath = "")
	private WebElement firstnameField;
	
	@FindBy(xpath = "")
	private WebElement lastnameField;
	
	@FindBy(xpath = "")
	private WebElement submitButton; 

	
	public CreateUserComponent(WebDriver driver) {
		
		this.driver = driver; 
		wdw = new WebDriverWait(this.driver, Duration.ofSeconds(2));
		
		PageFactory.initElements(this.driver, this);
		
	}
	
	public String getUsernameText() {
		
		return this.wdw.until(ExpectedConditions.visibilityOf(usernameField)).getText();
		
	}
	
	public String getPasswordText() {
		
		return this.wdw.until(ExpectedConditions.visibilityOf(passwordField)).getText();
		
	}
	
	public String getRetypedPasswordText() {
		
		return this.wdw.until(ExpectedConditions.visibilityOf(retypePasswordField)).getText();
		
	}
	
	public String getEmailText() {
		
		return this.wdw.until(ExpectedConditions.visibilityOf(emailField)).getText();
		
	}
	
	public String getFirstnameText() {
		
		return this.wdw.until(ExpectedConditions.visibilityOf(firstnameField)).getText();
		
	}
	
	public String getLastnameText() {
		
		return this.wdw.until(ExpectedConditions.visibilityOf(lastnameField)).getText();
		
	}
	
	public void clickSubmit() {
		
		this.wdw.until(ExpectedConditions.elementToBeClickable(submitButton)).click();
		
	}
	
	public void setUsernameField(String username) {
		
		this.wdw.until(ExpectedConditions.visibilityOf(usernameField)).sendKeys(username);
		
	}
	
	public void setPasswordField(String password) {
		
		this.wdw.until(ExpectedConditions.visibilityOf(passwordField)).sendKeys(password);
		
	}
	
	public void setRetypedPasswordField(String retypedPassword) {
		
		this.wdw.until(ExpectedConditions.visibilityOf(retypePasswordField)).sendKeys(retypedPassword);
		
	}
	
	public void setEmailField(String email) {
		
		this.wdw.until(ExpectedConditions.visibilityOf(emailField)).sendKeys(email);
		
	}
	
	public void setFirstnameField(String firstname) {
		
		this.wdw.until(ExpectedConditions.visibilityOf(firstnameField)).sendKeys(firstname);
		
	}
	
	public void setLastnameField(String lastname) {
		
		this.wdw.until(ExpectedConditions.visibilityOf(lastnameField)).sendKeys(lastname);
		
	}
	
	
	
	
	
	
	
	
	
}
