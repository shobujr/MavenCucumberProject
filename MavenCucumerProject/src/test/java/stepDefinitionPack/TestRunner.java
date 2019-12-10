package stepDefinitionPack;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)

@CucumberOptions(
		plugin= {"html:TestReport"},
		features="src/test/resources/Features",
		glue="stepDefinitionPack",
		monochrome = true
		//tags= {"@OurWebsiteFeature"}
		
		)


public class TestRunner extends AbstractTestNGCucumberTests  {

}
