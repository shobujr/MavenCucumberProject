Feature: Ourwebsite Signup funtionality
  as a user I want to create new account by multiple data

  Scenario: I want to create multiple new account by multiple data
    Given I am on our Website webpage
    When I Enter
      | FirstName | LastName | Email           | AgainEmail      | PassWord |
      | Ataur     | Tarafder | super@yahoo.com | super@yahoo.com | 56t4556  |
    When I Click on male radio button
    When I Select
      | Month | Day | Year |
      | May   |  10 | 1983 |
    Then I should be able to create new account successfully
