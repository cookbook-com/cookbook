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
	
