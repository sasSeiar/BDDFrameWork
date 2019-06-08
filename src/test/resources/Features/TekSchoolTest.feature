@TekSchoolTest
Feature: Tek School Test 

Background: 
	Given User go to Tek School page 
	And User click on test environment 
	
@LoginTest @smoketest @test 
Scenario: Login to test environment 
	When User see test environment page 
	Then User verify test environment title 
	
@LoginPage @test 
Scenario: Login to My Account 
	When User click on myAccount 
	And User select login from dropdown 
	Then User should see login page 
	
@test001 
Scenario Outline: Testing login with different user and pass 
	When User click on myAccount 
	And User select login from dropdown 
	Then User should see login page 
	When User enter username <userName>
	And User enter password <password> 
	And Click continue button 
	Then User should be logged in successfully 
	
	
	Examples: 
		|userName|password|
		|tek.school001@tek.com|tek@12345|
        #|tek.school002@tek.com|tek@12346|
        #|tek.school003@tek.com|tek@12346|
		
		
		
		
		
		
