package amazonStepDefinitions;

import amazonKeyword.CommonActions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class TodayDealStepDef extends CommonActions {
	
	@Given("^I want to open \"(.*)\" browser and launch the application$")
	public static void want_open_browser(String browser) {
		
		openBrowser(browser);
		navigateUrl();
		
	}

	@And ("^enter path \"(.*)\" and \"(.*)\"$")
	
	public static void enter_Text(String xpath,String Values)  {
		
	enterText(xpath,Values);

}
}