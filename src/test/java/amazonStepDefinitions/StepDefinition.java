package amazonStepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	
	WebDriver driver;
	
	@Given("^Open FireFox and Start Application$")
	public void Open_FireFox_and_Start_Application() throws Throwable {
	   
		driver=new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com");
		
	}

	@When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void I_enter_valid_username_and_password(String UserNm,String Pswd) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(UserNm);
		driver.findElement(By.id("pass")).sendKeys(Pswd);
		
		
		//label[@id='loginbutton']//input[@id='u_0_2']
		
	   
	}

	@Then("^User should be able to Login Successfully$")
	public void User_should_be_able_to_Login_Successfully() throws Throwable {
		driver.findElement(By.id("u_0_2")).click();
		driver.close();
	}

}
