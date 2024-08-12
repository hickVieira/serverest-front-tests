Feature: Login

    Scenario: Valid Login
        Given I am on the login page
        When I type my valid login credentials
        Then I should be logged in successfully
