Feature: User logging in

Scenario: User loggin in successfully (Positive test)
	When I am at the login page
	And I enter in a valid username
	And I enter in a valid password
	Then I should be taken to the welcome page and be able to see my name displayed

Scenario: User inputs invalid username (negative test)
	When I am at the login page
	
	
