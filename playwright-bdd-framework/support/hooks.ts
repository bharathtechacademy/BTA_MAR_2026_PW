import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import PlaywrightWorld from './world.ts';

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(90 * 1000); // Set default timeout to 90 seconds

//Method to Launch the browser engine before executing all the test cases. 
BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

//Method to Create a new browser context and page for each and every test scenario. 
Before(async function(this: PlaywrightWorld) {
    context = await browser.newContext();
    page = await context.newPage();
    this.page = page; // Assign the page to the World context
    this.initializePageObjects(); // Initialize page objects
});

//Method to Close the browser context after executing each and every test scenario. 
After(async function(this: PlaywrightWorld, scenario) {
    if (scenario.result?.status === 'FAILED') {
        const screenshot = await this.page.screenshot({ path: `./screenshots/${scenario.pickle.name}.png` });
        this.attach(screenshot, 'image/png'); // Attach the screenshot to the Cucumber report
    }
    
    await context.close();
});

//Method to Close the browser engine after executing all the test cases. 
AfterAll(async () => {
    await browser.close();
});