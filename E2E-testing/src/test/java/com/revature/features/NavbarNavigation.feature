Feature: Navbar navigation

Scenario: Navigating to login page (positive test)
	Given I am at the welcome page while not logged in
	When I open the dropdown navigation menu
	And I click the signin link
	Then I should be taken to the login page
	
Scenario: Logging out (positive test)
	Given I am at the welcome page while logged in
	When I open the dropdown navigation menu
	And I click the signout link
	Then I should be successfully logged out
	

Scenario: Navigating to welcome page (positive test) 
	Given I am at the recipe page
	When I click the website logo on the navbar
	Then I should be taken to the welcome page
	
Scenario: Navigating to the profile page (positive test)
	Given I am at the welcome page while logged in
	When I open the dropdown navigation menu
	And I click the profile link
	Then I should be taken to my profile page
	
Scenario: Pressing the random recipe button (positive test)
	Given I am at the welcome page
	When I click the random recipe button
	Then I should be taken to the recipe page and shown a random recipe
	
	
	

