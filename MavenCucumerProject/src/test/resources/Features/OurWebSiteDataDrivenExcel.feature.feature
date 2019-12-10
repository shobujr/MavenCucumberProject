Feature: Ourwebsite Signup funtionality
  as a user I want to create multiple new accounts by multiple data

  Scenario Outline: I want to create multiple new accounts by multiple data
    Given I am on our Website Webpage
    When I Enter, Select and Click "<RowIndex>"
    Then I should be able to create new accounts successfully

    Examples: 
      | RowIndex |
      |        1 |
      |        2 |
      |        3 |
      |        4 |
