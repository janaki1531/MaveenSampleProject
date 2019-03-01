Feature: Login verrification
  
Scenario: check for the guest login functionality
    Given I want to open "chrome" browser and launch the application
   
    And enter path "//input[@id='global-search-input']" and "watches for men"
    And mouse over on "//div[@class='GlobalTypeahead-dropdown hide-content']//div[4]"