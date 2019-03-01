Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Test Login with valid credentials
    Given Open FireFox and Start Application
    When I enter valid "<Username>" and "Password"
    Then User should be able to Login Successfully

    Examples: 
      | Username          | Password    |
      | Janaki.chityala   |  4147487008 |
      | Shiva.Chityala    | Shiva22@sep |
      | PavaniKunapareddy |    83787887 |
