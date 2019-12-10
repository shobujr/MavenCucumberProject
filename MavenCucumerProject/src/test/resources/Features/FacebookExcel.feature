@FacebookOutline
Feature: Facebook signup
  As a user he wants to create a new account in facebook singup page

  @SignupOutline
  Scenario Outline: User will be able to create new account using valid information
    Given User is on facebook signup page
    When User will enter and select "<Row_index>"
    And user will click on submit button
    Then user will create new account successfully

    Examples: 
      | Row_index |
      |         1 |
      |         2 |
      |         3 |
      |         4 |