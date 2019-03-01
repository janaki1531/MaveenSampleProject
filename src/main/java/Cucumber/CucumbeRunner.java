package Cucumber;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\shiva\\Desktop\\QA SELEMIUM TESTING AND JAVA\\duplicate workspace\\MaveenSampleProject\\src\\main\\java\\Cucumber\\cucumber.feature"
		,glue={"Cucumber.java"}
		,dryRun = true
		)

public class CucumbeRunner {

}


