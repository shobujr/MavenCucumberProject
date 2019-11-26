package stepDefinitionPack;

import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hook extends AbstractClass{
	
	@Before
	public void setUp() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.manage().window().maximize();
	}
	@After
	public void teardown() throws InterruptedException {
		Thread.sleep(3000);
		driver.close();
	}

}
