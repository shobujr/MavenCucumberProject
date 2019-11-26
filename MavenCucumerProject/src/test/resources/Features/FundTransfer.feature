Feature: Fund transfer functionality
  As a user I want to fund transfer to my family or someone.

	
  Scenario: 
    Given I am on fund transfer webpage
    When I select valid payee "Jim"
    When I enter valid amount "600"
    And I click on transfer button
    Then I should get success message "$600 transferred successfully to Jim!!"
 
  Scenario: 
    Given I am on fund transfer webpage
    When I select valid payee "Jim"
    When I enter invalid amount "6000"
    And I click on transfer button
    Then I should get fail message "Transfer failed!! account cannot be overdrawn"


  Scenario: 
    Given I am on fund transfer webpage
    When I select invalid payee "John"
    When I enter valid amount "800"
    And I click on transfer button
    Then I should get fail message "Transfer failed!! 'John' is not approved. Please contact your branch"
