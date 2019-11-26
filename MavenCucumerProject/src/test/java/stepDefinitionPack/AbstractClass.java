package stepDefinitionPack;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AbstractClass {
	static WebDriver driver;
	
	public  WebDriver getDriver() {
		if(driver==null) {
			driver=new ChromeDriver();
		}
		return driver;
	}

}
