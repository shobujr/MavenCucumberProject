package stepDefinitionPack;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OurWebSiteStepDefinition extends AbstractClass {
	
	
	@Given("^I am on our website webpage$")
	public void i_am_on_our_website_webpage() {
		driver.get("file:///C:/SELENIUMTRAINING/OurWebSite.html");
	   
	}

	@When("^I enter \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"$")
	public void i_enter(String Fname, String Lname, String Email, String AEmail, String Pword) {
		
		driver.findElement(By.id("FN")).sendKeys(Fname);
		driver.findElement(By.id("LN")).sendKeys(Lname);
		driver.findElement(By.id("EM")).sendKeys(Email);
		driver.findElement(By.id("AGE")).sendKeys(AEmail);
		driver.findElement(By.id("PW")).sendKeys(Pword);
	    
	}

	@When("^I click on \"([^\"]*)\"$")
	public void i_click_on(String gender) {
		if(gender.equalsIgnoreCase("Male")) {
			driver.findElement(By.id("ml")).click();
		}
		else {
			driver.findElement(By.id("fml")).click();
		}
	   
	}

	@When("^I select \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"$")
	public void i_select(String month, String day, String year) {
		
		Select monthSelect=new Select(driver.findElement(By.id("MN")));
		monthSelect.selectByVisibleText(month);
		
		Select daySelect=new Select(driver.findElement(By.id("DY")));
		daySelect.selectByVisibleText(day);
		
		Select yearSelect=new Select(driver.findElement(By.id("YR")));
		yearSelect.selectByVisibleText(year);
	    
	}	
	
	
	@Then("^I should be able to create a new account successfully$")
	public void i_should_be_able_to_create_a_new_account_successfully() {
		System.out.println("New account created successfully");
	
	}
	
	
	

}
