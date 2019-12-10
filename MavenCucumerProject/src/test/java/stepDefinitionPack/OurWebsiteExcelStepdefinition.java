package stepDefinitionPack;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import datahelperPack.DataHelper;

public class OurWebsiteExcelStepdefinition extends AbstractClass {
	
	public List<HashMap<String,String>>datamap;
	
	public OurWebsiteExcelStepdefinition() throws IOException {
		
		driver=AbstractClass.driver;
		
		datamap= DataHelper.data("‪C:\\SELENIUMTRAINING\\FacebookData.xlsx","Data1");
		
	}
	
	
	
	@Given("^I am on our Website Webpage$")
	public void i_am_on_our_Website_Webpage() {
		driver.get("file:///C:/SELENIUMTRAINING/OurWebSite.html");
	   
	}

	@When("^I Enter, Select and Click \"([^\"]*)\"$")
	public void i_Enter_Select_and_Click(String datavalue) {
		
		int index=Integer.parseInt(datavalue)-1;
		
		
		
		driver.findElement(By.id("FN")).sendKeys(datamap.get(index).get("First Name"));
		
		driver.findElement(By.id("LN")).sendKeys(datamap.get(index).get("Last Name"));
		driver.findElement(By.id("EM")).sendKeys(datamap.get(index).get("Email"));
		driver.findElement(By.id("AGE")).sendKeys(datamap.get(index).get("Again Email"));
		driver.findElement(By.id("PW")).sendKeys(datamap.get(index).get("Password"));
		
		if(datamap.get(index).get("Gender").equalsIgnoreCase("Male")) {
			driver.findElement(By.id("ml")).click();
		}
		else {
			driver.findElement(By.id("fml")).click();
		}
		Select monthSelect=new Select(driver.findElement(By.id("MN")));
		monthSelect.selectByVisibleText(datamap.get(index).get("Birth Month"));
		
		Select daySelect=new Select(driver.findElement(By.id("DY")));
		daySelect.selectByVisibleText(datamap.get(index).get("Birth Day"));
		
		Select yearSelect=new Select(driver.findElement(By.id("YR")));
		yearSelect.selectByVisibleText(datamap.get(index).get("Birth Year"));
	    
	}

	@Then("^I should be able to create new accounts successfully$")
	public void i_should_be_able_to_create_new_accounts_successfully() {
		System.out.println("New account created successfully");
	    
	}



}
