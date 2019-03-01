$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "title-of-your-feature;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open FireFox and Start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid \"\u003cUsername\u003e\" and \"Password\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should be able to Login Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 11,
      "id": "title-of-your-feature;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Janaki.chityala",
        "4147487008"
      ],
      "line": 12,
      "id": "title-of-your-feature;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "Shiva.Chityala",
        "Shiva22@sep"
      ],
      "line": 13,
      "id": "title-of-your-feature;test-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "PavaniKunapareddy",
        "83787887"
      ],
      "line": 14,
      "id": "title-of-your-feature;test-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "title-of-your-feature;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open FireFox and Start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid \"Janaki.chityala\" and \"Password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should be able to Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition3.Open_FireFox_and_Start_Application()"
});
formatter.result({
  "duration": 17247876161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Janaki.chityala",
      "offset": 15
    },
    {
      "val": "Password",
      "offset": 37
    }
  ],
  "location": "StepDefinition3.I_enter_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 159136172,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition3.User_should_be_able_to_Login_Successfully()"
});
formatter.result({
  "duration": 4791429550,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "title-of-your-feature;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open FireFox and Start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid \"Shiva.Chityala\" and \"Password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should be able to Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition3.Open_FireFox_and_Start_Application()"
});
formatter.result({
  "duration": 18112702746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shiva.Chityala",
      "offset": 15
    },
    {
      "val": "Password",
      "offset": 36
    }
  ],
  "location": "StepDefinition3.I_enter_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 233258080,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition3.User_should_be_able_to_Login_Successfully()"
});
formatter.result({
  "duration": 8019489065,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "title-of-your-feature;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open FireFox and Start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid \"PavaniKunapareddy\" and \"Password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should be able to Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition3.Open_FireFox_and_Start_Application()"
});
formatter.result({
  "duration": 19364689948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PavaniKunapareddy",
      "offset": 15
    },
    {
      "val": "Password",
      "offset": 39
    }
  ],
  "location": "StepDefinition3.I_enter_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 187056442,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition3.User_should_be_able_to_Login_Successfully()"
});
formatter.result({
  "duration": 6648672967,
  "status": "passed"
});
});