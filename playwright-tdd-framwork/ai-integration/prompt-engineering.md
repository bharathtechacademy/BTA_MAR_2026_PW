# Prompt and prompt engineering frameworks 

## What is a prompt? 
A prompt is all about a simple instruction or a question given to the AI model. 

## What is the importance of providing the right prompt? 
The importance of providing the right prompt is that if you are going to give a better prompt, then only you are going to get a better AI response. 

Example : 

Bad Prompt : 
Explain Playwright ?

Good Prompt :
Currently, I am working as a Senior Automation Engineer. Now I want to learn Playwright to implement Playwright in my current project, where I want to create a nice framework to automate application UI, API, database, and different other components. Can you help me to learn Playwright and to build the framework? 


## Prompt Engineering Frameworks 
Prompt engineering frameworks are nothing but a set of standard techniques which we can follow to get the best outcome from the AI model by providing a prompt in a more structured and systematic way. 

Some of the prompt engineering frameworks are 

1. RACE Framework
2. CLEAR Framework

## RACE Framework 

- R refers role
- A refers action
- C refers context
- E refers expectation or Examples

### Without vs With RACE Framework

### Without RACE Framework 
Read the user story and write all the possible positive, negative, and edge test cases for the given user story displayed on the current page.

### With RACE Framework

Role : As a senior quality analyst 

Action : Write all the possible positive, negative, and edge test cases for the given user story displayed on the current page. 

Context : This application is related to Creatio CRM. It is a CRM-based application, and recently my developer designed the login page for this application. They have added a couple of validations to avoid invalid logins. Now I want to write all the possible test cases to identify maximum defects. For that, I need detailed test cases with a detailed step by step. To upload the test cases in Jira by following the standard Jira template 

Example : I want a CSV file to be generated with positive, negative, and edge test cases in the below format. 

* Mandatory test steps along with expected results to be included in each and every testcase.

1. Launch the Chrome browser. 
2. Enter the URL and launch the application with the URL "https://accounts.creatio.com/login/alm"
3. Verify whether the cookies pop-up is getting displayed. 
4. Select the "Allow All" button and close the cookies popup. 
5. Verify whether the login page is displayed successfully. 

SampleTestCases.csv
===================
ID,Work Item Type,Title,Test Step,Step Action,Step Expected,Area Path,Assigned To,State
,Test Case,Verify whether cookies popup is getting displayed when user launch the application,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
,Test Case,Verify Cookies Consent message displayed in the Cookies popup,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
,,,4,Verify Cookies Consent message displayed in the Cookies popup," consent message should be displayed as below

""This website uses cookies",,,
,Test Case,Verify logos displayed in the Cookies popup.,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1,"Launch the browser. 

Browser = Chrome",Browser should be launched successfully.,,,
,,,2,"Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm",application should be launched successfully.,,,
,,,3,Verify whether Cookies popup is getting displayed,cookies pop-up should get displayed before the login page to take the consent from the user.,,,
,,,4,Verify logos displayed in the Cookies popup.,Creatio logo and Cookies Bot logo should be displayed within the cookies popup.,,,


## CLEAR FRAMEWORK

Clear Framework is going to work very similarly to Human-Like Responses, especially when it comes to this Clear Framework. Along with the RACE Framework-related features, we are also going to add an additional feature called Limitations. 

With in CLEAR Framework 
- C refers context
- L refers Limitations
- E refers Examples
- A refers Action
- R refers Role

Role : As a senior quality analyst 

Action : Write all the possible positive, negative, and edge test cases for the given user story displayed on the current page. 

Context : This application is related to Creatio CRM. It is a CRM-based application, and recently my developer designed the login page for this application. They have added a couple of validations to avoid invalid logins. Now I want to write all the possible test cases to identify maximum defects. For that, I need detailed test cases with a detailed step by step. To upload the test cases in Jira by following the standard Jira template 

* Limitations:
- Do not generate duplicate test cases. 
- Avoid very generic test cases. 
- Focus on the functional and usability and boundary scenarios related to the current user story only. 
- Do not include anything related to performance or security testing. 

Example : I want a CSV file to be generated with positive, negative, and edge test cases in the below format. 

* Mandatory test steps along with expected results to be included in each and every testcase.

1. Launch the Chrome browser. 
2. Enter the URL and launch the application with the URL "https://accounts.creatio.com/login/alm"
3. Verify whether the cookies pop-up is getting displayed. 
4. Select the "Allow All" button and close the cookies popup. 
5. Verify whether the login page is displayed successfully. 

SampleTestCases.csv
===================
ID,Work Item Type,Title,Test Step,Step Action,Step Expected,Area Path,Assigned To,State
,Test Case,Verify whether cookies popup is getting displayed when user launch the application,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
,Test Case,Verify Cookies Consent message displayed in the Cookies popup,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
,,,4,Verify Cookies Consent message displayed in the Cookies popup," consent message should be displayed as below

""This website uses cookies",,,
,Test Case,Verify logos displayed in the Cookies popup.,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1,"Launch the browser. 

Browser = Chrome",Browser should be launched successfully.,,,
,,,2,"Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm",application should be launched successfully.,,,
,,,3,Verify whether Cookies popup is getting displayed,cookies pop-up should get displayed before the login page to take the consent from the user.,,,
,,,4,Verify logos displayed in the Cookies popup.,Creatio logo and Cookies Bot logo should be displayed within the cookies popup.,,,