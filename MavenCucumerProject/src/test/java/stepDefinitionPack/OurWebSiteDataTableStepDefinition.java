package stepDefinitionPack;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OurWebSiteDataTableStepDefinition extends AbstractClass{
	
	@Given("^I am on our Website webpage$")
	public void i_am_on_our_Website_webpage() {
		driver.get("file:///C:/SELENIUMTRAINING/OurWebSite.html");
	   
	}

	@When("^I Enter$")
	public void i_Enter(DataTable table1) {
		
		List<List<String>>data=table1.raw();
		driver.findElement(By.id("FN")).sendKeys(data.get(1).get(0));
		driver.findElement(By.id("LN")).sendKeys(data.get(1).get(1));
		driver.findElement(By.id("EM")).sendKeys(data.get(1).get(2));
		driver.findElement(By.id("AGE")).sendKeys(data.get(1).get(3));
		driver.findElement(By.id("PW")).sendKeys(data.get(1).get(4));
	    
	    
	}
	@When("^I Click on male radio button$")
	public void i_Click_on_male_radio_button() {
		driver.findElement(By.id("ml")).click();
	}
	

	@When("^I Select$")
	public void i_Select(DataTable table3) {
		List<List<String>>data=table3.raw();
		
		Select monthSelect=new Select(driver.findElement(By.id("MN")));
		monthSelect.selectByVisibleText(data.get(1).get(0));
		
		Select daySelect=new Select(driver.findElement(By.id("DY")));
		daySelect.selectByVisibleText(data.get(1).get(1));
		
		Select yearSelect=new Select(driver.findElement(By.id("YR")));
		yearSelect.selectByVisibleText(data.get(1).get(2));
	}

	

	@Then("^I should be able to create new account successfully$")
	public void i_should_be_able_to_create_new_account_successfully() {
	    System.out.println("Account created successfully");
	}

	
	
	

}
