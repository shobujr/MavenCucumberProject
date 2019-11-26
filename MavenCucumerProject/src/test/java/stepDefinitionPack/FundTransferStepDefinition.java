package stepDefinitionPack;

import org.openqa.selenium.By;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class FundTransferStepDefinition extends AbstractClass{
	
	@Given("^I am on fund transfer webpage$")
	public void i_am_on_fund_transfer_webpage() {
		driver.get("file:///C:/SELENIUMTRAINING/WebSite/JavaScript/FundTransfer.html");
	   
	}

	@When("^I select valid payee \"([^\"]*)\"$")
	public void i_select_valid_payee(String vpayee) {
		driver.findElement(By.id("payee")).sendKeys(vpayee);
	   
	}

	@When("^I enter valid amount \"([^\"]*)\"$")
	public void i_enter_valid_amount(String vamount) {
		driver.findElement(By.id("amount")).sendKeys(vamount);
	    
	}

	@When("^I click on transfer button$")
	public void i_click_on_transfer_button() {
		driver.findElement(By.id("transfer")).click();
	   
	}

	@Then("^I should get success message \"([^\"]*)\"$")
	public void i_should_get_success_message(String expectedSuccessMessge) {
		String actualSuccessmessage=driver.findElement(By.id("message")).getText();
		Assert.assertEquals(expectedSuccessMessge, actualSuccessmessage);
	   
	}
	@When("^I select invalid payee \"([^\"]*)\"$")
	public void i_select_invalid_payee(String invpayee) {
		driver.findElement(By.id("payee")).sendKeys(invpayee);
	    
	}
	@When("^I enter invalid amount \"([^\"]*)\"$")
	public void i_enter_invalid_amount(String invamount) {
		driver.findElement(By.id("amount")).sendKeys(invamount);
	   
	}

	@Then("^I should get fail message \"([^\"]*)\"$")
	public void i_should_get_fail_message(String expectedfailMessage) {
		
		String actualFailMessage=driver.findElement(By.id("message")).getText();
		
		Assert.assertEquals(actualFailMessage, expectedfailMessage );
		
	   
	}

	



}
