@OurWebsiteFeature
Feature: Ourwebsite signup funtionality
  as a user I want to create multiple new account by multiple data

  Scenario Outline: I want to create multiple new account by multiple data
    Given I am on our website webpage
    When I enter "<FirstName>" , "<LastName>" , "<Email>" , "<AgainEmail>" , "<PassWord>"
    When I click on "<Gender>"
    When I select "<Month>" , "<Day>" , "<Year>"
    Then I should be able to create a new account successfully

    Examples: 
      | FirstName | LastName | Email           | AgainEmail      | PassWord  | Gender | Month | Day | Year |
      | Rocky     | Rahman1  | shobujr@aol.com | shobujr@aol.com | Guest@123 | Male   | Jan   |   1 | 1987 |
      | Rocky1    | Rahman2  | rocy1@aol.com   | shobujr@aol.com | Guest@123 | Female | Feb   |  11 | 1987 |
      | Rocky2    | Rahman3  | rocky2@aol.com  | shobujr@aol.com | Guest@123 | Female | Mar   |  13 | 1982 |
      
      | Rocky     | Rahman1  | shobujr@aol.com | shobujr@aol.com | Guest@123 | Male   | Jan   |   1 | 1987 |
      | Rocky1    | Rahman2  | rocy1@aol.com   | shobujr@aol.com | Guest@123 | Female | Feb   |  11 | 1987 |
      | Rocky2    | Rahman3  | rocky2@aol.com  | shobujr@aol.com | Guest@123 | Female | Mar   |  13 | 1982 |
      
