package stepDefinitionPack;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import datahelperPack.DataHelper;




public class FacebookExcelStepDefinition extends AbstractClass {
	
	
	public WebDriver driver;
    public List<HashMap<String,String>> datamap;
    
    public FacebookExcelStepDefinition() throws IOException{
    
       driver = AbstractClass.driver;
       datamap = DataHelper.data(System.getProperty("user.dir")+"//src//test//resources//Data//FacebookData.xlsx","Data3");
    }
	
	@Given("^User is on facebook signup page$")
	public void user_is_on_facebook_signup_page() throws Throwable {
		driver.get("https://www.facebook.com/");
	   
	}

	@When("^User will enter and select \"(.*?)\"$")
	public void user_will_enter_and_select(String arg1) throws Throwable {
		int index = Integer.parseInt(arg1)-1;
		//System.out.println("Printing current data set...");
        /*for(HashMap h:datamap){
        	//h.values();
            //System.out.println(h.keySet());
            //System.out.println(h.values());
        }*/
		driver.findElement(By.name("firstname")).sendKeys(datamap.get(index).get("First Name"));
		driver.findElement(By.name("lastname")).sendKeys(datamap.get(index).get("Last Name"));
		driver.findElement(By.name("reg_email__")).sendKeys(datamap.get(index).get("Email"));
		driver.findElement(By.name("reg_email_confirmation__")).sendKeys(datamap.get(index).get("Again Email"));
		driver.findElement(By.name("reg_passwd__")).sendKeys(datamap.get(index).get("Password"));
		
		Select Monthselect=new Select(driver.findElement(By.id("month")));
		Monthselect.selectByVisibleText(datamap.get(index).get("Birth Month"));
		
	    Select DaySelect=new Select(driver.findElement(By.id("day")));
	    DaySelect.selectByVisibleText(datamap.get(index).get("Birth Day"));
	    
	    Select YearSelect=new Select(driver.findElement(By.id("year")));
	    YearSelect.selectByVisibleText(datamap.get(index).get("Birth Year"));
	    
	    if(datamap.get(index).get("Gender").equalsIgnoreCase("Female")){
			driver.findElement(By.xpath(".//*[@id='u_0_6']")).click();
		}
		else if(datamap.get(index).get("Gender").equalsIgnoreCase("Male")){
			driver.findElement(By.xpath(".//*[@id='u_0_7']")).click();
		}
	    
	}

	@When("^user will click on submit button$")
	public void user_will_click_on_submit_button() throws Throwable {
		driver.findElement(By.name("websubmit")).click();
	    
	}

	@Then("^user will create new account successfully$")
	public void user_will_create_new_account_successfully() throws Throwable {
	    System.out.println("Account created successfully");
	}

}
