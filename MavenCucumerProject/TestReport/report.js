$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/FundTransfer.feature");
formatter.feature({
  "name": "Fund transfer functionality",
  "description": "  As a user I want to fund transfer to my family or someone.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on fund transfer webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_am_on_fund_transfer_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select valid payee \"Jim\"",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_select_valid_payee(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid amount \"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_enter_valid_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_click_on_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get success message \"$600 transferred successfully to Jim!!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_should_get_success_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on fund transfer webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_am_on_fund_transfer_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select valid payee \"Jim\"",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_select_valid_payee(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid amount \"6000\"",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_enter_invalid_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_click_on_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get fail message \"Transfer failed!! account cannot be overdrawn\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_should_get_fail_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on fund transfer webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_am_on_fund_transfer_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select invalid payee \"John\"",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_select_invalid_payee(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid amount \"800\"",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_enter_valid_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_click_on_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get fail message \"Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_should_get_fail_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/OurWebSite.feature");
formatter.feature({
  "name": "Ourwebsite signup funtionality",
  "description": "  as a user I want to create multiple new account by multiple data",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@OurWebsiteFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "I want to create multiple new account by multiple data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on our website webpage",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \"\u003cFirstName\u003e\" , \"\u003cLastName\u003e\" , \"\u003cEmail\u003e\" , \"\u003cAgainEmail\u003e\" , \"\u003cPassWord\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on \"\u003cGender\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I select \"\u003cMonth\u003e\" , \"\u003cDay\u003e\" , \"\u003cYear\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should be able to create a new account successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "AgainEmail",
        "PassWord",
        "Gender",
        "Month",
        "Day",
        "Year"
      ]
    },
    {
      "cells": [
        "Rocky",
        "Rahman1",
        "shobujr@aol.com",
        "shobujr@aol.com",
        "Guest@123",
        "Male",
        "Jan",
        "1",
        "1987"
      ]
    },
    {
      "cells": [
        "Rocky1",
        "Rahman2",
        "rocy1@aol.com",
        "shobujr@aol.com",
        "Guest@123",
        "Female",
        "Feb",
        "11",
        "1987"
      ]
    },
    {
      "cells": [
        "Rocky2",
        "Rahman3",
        "rocky2@aol.com",
        "shobujr@aol.com",
        "Guest@123",
        "Female",
        "Mar",
        "13",
        "1982"
      ]
    },
    {
      "cells": [
        "Rocky",
        "Rahman1",
        "shobujr@aol.com",
        "shobujr@aol.com",
        "Guest@123",
        "Male",
        "Jan",
        "1",
        "1987"
      ]
    },
    {
      "cells": [
        "Rocky1",
        "Rahman2",
        "rocy1@aol.com",
        "shobujr@aol.com",
        "Guest@123",
        "Female",
        "Feb",
        "11",
        "1987"
      ]
    },
    {
      "cells": [
        "Rocky2",
        "Rahman3",
        "rocky2@aol.com",
        "shobujr@aol.com",
        "Guest@123",
        "Female",
        "Mar",
        "13",
        "1982"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I want to create multiple new account by multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebsiteFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on our website webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_am_on_our_website_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Rocky\" , \"Rahman1\" , \"shobujr@aol.com\" , \"shobujr@aol.com\" , \"Guest@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Male\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Jan\" , \"1\" , \"1987\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to create a new account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_should_be_able_to_create_a_new_account_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to create multiple new account by multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebsiteFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on our website webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_am_on_our_website_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Rocky1\" , \"Rahman2\" , \"rocy1@aol.com\" , \"shobujr@aol.com\" , \"Guest@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Female\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Feb\" , \"11\" , \"1987\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to create a new account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_should_be_able_to_create_a_new_account_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to create multiple new account by multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebsiteFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on our website webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_am_on_our_website_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Rocky2\" , \"Rahman3\" , \"rocky2@aol.com\" , \"shobujr@aol.com\" , \"Guest@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Female\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Mar\" , \"13\" , \"1982\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to create a new account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_should_be_able_to_create_a_new_account_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to create multiple new account by multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebsiteFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on our website webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_am_on_our_website_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Rocky\" , \"Rahman1\" , \"shobujr@aol.com\" , \"shobujr@aol.com\" , \"Guest@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Male\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Jan\" , \"1\" , \"1987\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to create a new account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_should_be_able_to_create_a_new_account_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to create multiple new account by multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebsiteFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on our website webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_am_on_our_website_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Rocky1\" , \"Rahman2\" , \"rocy1@aol.com\" , \"shobujr@aol.com\" , \"Guest@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Female\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Feb\" , \"11\" , \"1987\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to create a new account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_should_be_able_to_create_a_new_account_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to create multiple new account by multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebsiteFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on our website webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_am_on_our_website_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Rocky2\" , \"Rahman3\" , \"rocky2@aol.com\" , \"shobujr@aol.com\" , \"Guest@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Female\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Mar\" , \"13\" , \"1982\"",
  "keyword": "When "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to create a new account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_should_be_able_to_create_a_new_account_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});