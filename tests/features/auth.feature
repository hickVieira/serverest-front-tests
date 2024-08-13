Feature: Authentication

  Scenario: Valid registration
    Given I am on the register page
    When I type my email and password
    Then I should be registered successfully

  Scenario: Valid login
    Given I am on the login page
    When I type my valid login credentials
    Then I should be logged in successfully
  
  Scenario: Invalid login email
    Given I am on the login page
    When I type the invalid email "invalid@email.com"
    Then I should not be logged in and get an informative error message
