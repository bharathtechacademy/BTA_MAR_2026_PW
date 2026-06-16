import { Given, When, Then } from '@cucumber/cucumber';
import PlaywrightWorld from '../../support/world.ts';

// Given Launch the creatio crm application
Given('Launch the creatio crm application', async function (this: PlaywrightWorld) {
    await this.loginPageSteps.launchtheApplication();
})

//Then Verify cookies popup is displayed successfully
Then('Verify cookies popup is displayed successfully', async function (this: PlaywrightWorld) {
    await this.cookiesPageSteps.verifyCookiesPopupIsDisplayed();
})

// And Verify cookies popup content contains the following text
Then('Verify cookies popup content contains the following text', async function (this: PlaywrightWorld, expectedContent: string) {
    await this.cookiesPageSteps.verifyCookiesPopupContent(expectedContent);
})

//And Verify cookies popup logos are displayed successfully
Then('Verify cookies popup logos are displayed successfully', async function (this: PlaywrightWorld) {
    await this.cookiesPageSteps.verifyCookiesPopupLogos();
})

//And Verify cookies popup selection buttons are displayed successfully
Then('Verify cookies popup selection buttons are displayed successfully', async function (this: PlaywrightWorld) {
    await this.cookiesPageSteps.verifyCookiesPopupSelectionButtons();
})

//And Verify cookies popup switch buttons are displayed successfully
Then('Verify cookies popup switch buttons are displayed successfully', async function (this: PlaywrightWorld) {
    await this.cookiesPageSteps.verifyCookiesPopupSwitchButtons();
})

//And Verify show-details link is displayed successfully in the cookies pop-up
Then('Verify show-details link is displayed successfully in the cookies pop-up', async function (this: PlaywrightWorld) {
    await this.cookiesPageSteps.verifyCookiesPopupShowDetailsLink();
})

//When User click on show-details link in the cookies pop-up
When('User click on show-details link in the cookies pop-up', async function (this: PlaywrightWorld) {
    await this.cookiesPageSteps.clickOnShowDetailsLink();
})

//Then Verify cookies pop-up is expanded successfully
Then('Verify cookies pop-up is expanded successfully', async function (this: PlaywrightWorld) {
    await this.cookiesPageSteps.verifyExpandedViewOfCookiesPopup();
})

//When User click on "Allow All" button in the cookies pop-up
When('User click on {string} button in the cookies pop-up', async function (this: PlaywrightWorld, buttonName: string) {
    await this.cookiesPageSteps.clickOnSelectionButton(buttonName);
})

//Then Verify cookies pop-up should be closed successfully  
Then('Verify cookies pop-up should be closed successfully', async function (this: PlaywrightWorld) {
    await this.cookiesPageSteps.verifyCookiesPopupIsClosed();
})

//Given The Login page is launched
Given('The Login page is launched', async function (this: PlaywrightWorld) {
    await this.loginPageSteps.verifyLoginPageIsDisplayed();
})

//When User enter "<username>" and "<password>" in the login page
When('User enter {string} and {string} in the login page', async function (this: PlaywrightWorld, username: string, password: string) {
    await this.loginPageSteps.enterBusinessEmailAndPassword(username, password);
})

//And User click on Login button in the login page
When('User click on Login button in the login page', async function (this: PlaywrightWorld) {
    await this.loginPageSteps.clickOnLoginButton();
})

//Then Login Should be "<result>"
Then('Login Should be {string}', async function (this: PlaywrightWorld, expectedResult: string) {
    if (expectedResult.toLowerCase() === "success") {
        await this.homePageSteps.verifyHomePageLaunched();
    } else {
        await this.loginPageSteps.verifyErrorMessageForInvalidCredentials();
    }
})

//When User clicks on the profile icon in the top right corner
When('User clicks on the profile icon in the top right corner', async function (this: PlaywrightWorld) {
    await this.homePageSteps.clickProfileIcon();
});

//And User clicks on the logout button
When('User clicks on the logout button', async function (this: PlaywrightWorld) {
    await this.homePageSteps.clickLogoutLink();
});

//Then Verify user should be logged out successfully
Then('Verify user should be logged out successfully', async function (this: PlaywrightWorld) {
    await this.loginPageSteps.verifyLoginPageIsDisplayed();
});

//Then Verify the forgot password link is displayed on the login page
Then('Verify the forgot password link is displayed on the login page', async function (this: PlaywrightWorld) {
    await this.loginPageSteps.verifyForgotPasswordLinkIsDisplayed();
});

//When User clicks on the forgot password link
When('User clicks on the forgot password link', async function (this: PlaywrightWorld) {
    await this.loginPageSteps.clickOnForgotPasswordLink();
});

//Then forgot password confirmation message should be displayed
Then('forgot password confirmation message should be displayed', async function (this: PlaywrightWorld) {
    await this.loginPageSteps.verifyForgotPasswordConfirmationMessageIsDisplayed();
});


Then('Verify Forgot Password link is displayed successfully in the login page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});



When('User click on Forgot Password link in the login page', async function (this: PlaywrightWorld) {
    await this.loginPageSteps.clickOnForgotPasswordLink();
});


Then('Verify user is navigated to the Forgot Password page successfully',  async function (this: PlaywrightWorld) {
    await this.loginPageSteps.verifyForgotPasswordConfirmationMessageIsDisplayed();
});

Then('Verify Social Media Login options are displayed successfully in the login page',async function (this: PlaywrightWorld) {
    await this.loginPageSteps.verifySocialMediaIconsAreDisplayed();
});

When('User click on Logout button in the application', async function (this: PlaywrightWorld) {
    await this.homePageSteps.clickLogoutLink();
});

Then('Verify user is logged out successfully and navigated to the login page', async function (this: PlaywrightWorld) {
    await this.loginPageSteps.verifyLoginPageIsDisplayed();
});