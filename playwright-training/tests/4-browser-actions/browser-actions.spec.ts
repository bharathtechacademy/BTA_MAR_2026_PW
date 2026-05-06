import { test, expect, chromium } from '@playwright/test';

test('Browser Actions Test', async ({  }) => {

    //Launch the Chrome browser engine. 
    const browserEngine = await chromium.launch({headless:false});//{channel:'msedge'}

    //Launch the browser context within the browser engine. 
    const browserContext = await browserEngine.newContext();

    //Clear all the cookies within the browser context. 
    await browserContext.clearCookies();

    //Launch the new page within the browser context. 
    const page = await browserContext.newPage();

    //Maximize the page to a specific resolution (1920 * 1080)
    await page.setViewportSize({ width: 1920, height: 1080 });

    //Launch the application Google using URL www.google.com
    await page.goto('https://www.google.com');

    //Verify whether Google is launched successfully by validating the title of the application. 
    expect(page).toHaveTitle("Google");

    //Launch new URL www.playwright.dev within the same page. 
    await page.goto('https://www.playwright.dev');

    //Navigate back to the previous application Google from the Playwright page 
    await page.goBack();

    //Navigating forward to the next application from Google to Playwright. 
    await page.goForward();

    //Refresh the current page. 
    await page.reload();

    //Launch the new tab within the same browser. 
    const newTab = await browserContext.newPage();  

    //Launch the new application www.selenium.dev within the new tab. 
    await newTab.goto('https://www.selenium.dev');

    //Go back to the previous tab and display Playwright application. 
    await page.bringToFront();

    //Verify the current application by using the URL displayed in the current browser page. 
    const currentURL = page.url();
    expect(currentURL).toBe('https://playwright.dev/');

    //Close the current page. 
    await page.close();

    //Close all the pages and tabs together
    await browserContext.close();
    await browserEngine.close();

});