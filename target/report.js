$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolTest.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Test",
  "description": "",
  "id": "tek-school-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    }
  ]
});
formatter.before({
  "duration": 4098795463,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4867881347,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1310413445,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login to test environment",
  "description": "",
  "id": "tek-school-test;login-to-test-environment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@LoginTest"
    },
    {
      "line": 8,
      "name": "@smoketest"
    },
    {
      "line": 8,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User see test environment page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User verify test environment title",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_see_test_environment_page()"
});
formatter.result({
  "duration": 1233179047,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_verify_test_environment_title()"
});
formatter.result({
  "duration": 6728998,
  "status": "passed"
});
formatter.after({
  "duration": 795116156,
  "status": "passed"
});
formatter.before({
  "duration": 3391175298,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4868641123,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1847451206,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to My Account",
  "description": "",
  "id": "tek-school-test;login-to-my-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@LoginPage"
    },
    {
      "line": 13,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_click_on_myAccount()"
});
formatter.result({
  "duration": 74793658,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 437154040,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.User_should_see_login_page()"
});
formatter.result({
  "duration": 687601269,
  "status": "passed"
});
formatter.after({
  "duration": 806281975,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username \u003cuserName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 31,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;1"
    },
    {
      "cells": [
        "tek.school001@tek.com",
        "tek@12345"
      ],
      "line": 32,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3375484755,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4670994164,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1447545689,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username tek.school001@tek.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password tek@12345",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_click_on_myAccount()"
});
formatter.result({
  "duration": 396456198,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 598544090,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.User_should_see_login_page()"
});
formatter.result({
  "duration": 878771117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tek.school001@tek.com",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 123853654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tek@12345",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.user_enter_password_test(String)"
});
formatter.result({
  "duration": 80816856,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.click_continue_button()"
});
formatter.result({
  "duration": 643933210,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 770404953,
  "status": "passed"
});
formatter.after({
  "duration": 825521048,
  "status": "passed"
});
});