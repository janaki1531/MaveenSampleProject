package amazonKeyword;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CommonActions {

	public static WebDriver driver;
	//openBrowser("chrome");

	public static void openBrowser(String browser) {
		
		try {
			if(browser.equalsIgnoreCase("Chrome")) {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\shiva\\Desktop\\QA SELEMIUM TESTING AND JAVA\\duplicate workspace\\MaveenSampleProject\\driver\\chromedriver.exe");
		 driver = new ChromeDriver();
			}
			else if
				(browser.equalsIgnoreCase("IE")){
		//code for IE			
			}
			else if(browser.equalsIgnoreCase("Gecko")){
		
		//code for IE			
		
			} else{
			 
				System.out.println("Invalid browser");
				
							}
			System.out.println("user is able to open the chrome browser");
	}catch(Exception e) {
		e.printStackTrace();
		System.out.println("user is not able to open the chrome browser");
	}
		
		//navigate to url
	}	
		public static void navigateUrl() {
			
		try {
		
			driver.get("https://www.walmart.com/");
			System.out.println("user is able to open the url");
				}catch(Exception e) {
		e.printStackTrace();
		System.out.println("user is able to open the url");
	}
		}
		
		public static void enterText(String xpath,String value) {
			try {
		
			driver.findElement(By.xpath(xpath)).sendKeys(value);
			//driver.findElement(By.xpath(xpath)).click();
			Thread.sleep(3000);
		//	driver.findElement(By.id("//span[@class='button-wrapper']")).click();
			driver.findElement(By.xpath("//div[@class='GlobalTypeahead-dropdown hide-content']//div[4]")).click();
			driver.findElement(By.xpath("//span[@class='elc-icon elc-icon-search-nav elc-icon-18']")).click();
			
			
			System.out.println("User is able to enter"+ value+"value");
		}catch(Exception e) {
			e.printStackTrace();
		}
		}
			
			public static void  mouse(String xpath) {
				try {
			
				driver.findElement(By.xpath("//div[@class='GlobalTypeahead-dropdown hide-content']//div[4]")).click();
				
			
			
			}catch(Exception e) {
				e.printStackTrace();
			}
			}
				public static void search(String xpath) {
					try {
				
				
					driver.findElement(By.xpath("//span[@class='elc-icon elc-icon-search-nav elc-icon-18']")).click();
				
				
				}catch(Exception e) {
					e.printStackTrace();
				}
		}

}
