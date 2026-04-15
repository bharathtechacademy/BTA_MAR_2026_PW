// Test Case 1: verify the home page.
console.log("******************TEST CASE 1: VERIFY THE HOME PAGE******************");
launchBrowserAndLogin("chrome", "https://www.icici.com/");
console.log("Verify the home page is displayed or not");
logoutAndCloseBrowser();

// Test Case 2: verify the account balance
console.log("******************TEST CASE 2: VERIFY THE ACCOUNT BALANCE******************");
launchBrowserAndLogin("edge", "https://dev.icici.com/");
console.log("Verify the home page is displayed");
console.log("Verify the account balance is displayed as " + getAccountBalance());
logoutAndCloseBrowser();

// Test Case 3: verify the account statement
console.log("******************TEST CASE 3: VERIFY THE ACCOUNT STATEMENT******************");
launchBrowserAndLogin("firefox", "https://uat.icici.com/");
console.log("Verify the home page is displayed");
console.log("Navigate to the account statement page");
console.log("Verify the account statement is displayed with the following details:");
logoutAndCloseBrowser();

function launchBrowserAndLogin(browser_name, url) {
    console.log(`Launch the ${browser_name} Browser`);
    console.log(`Enter the URL: ${url}`);
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}

function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance() {
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

//Function with parameters
//Function without parameters
//Function with return type
//Function without return type 