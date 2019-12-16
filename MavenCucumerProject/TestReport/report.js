$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/FundTransfer.feature");
formatter.feature({
  "name": "Fund transfer functionality",
  "description": "  As a user I want to fund transfer to my family or someone.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FundTransfer"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FundTransfer"
    },
    {
      "name": "@vpva"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FundTransfer"
    },
    {
      "name": "@vpiva"
    }
  ]
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
});