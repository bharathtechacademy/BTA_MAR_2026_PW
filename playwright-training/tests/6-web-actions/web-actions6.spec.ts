import { test, expect } from '@playwright/test';

test('Web Actions - Handling shadow root', async ({ page }) => {

// 1. Enter URL and Launch the application (https://selectorshub.com/xpath-practice-page/)
await page.goto("https://selectorshub.com/xpath-practice-page/");

// take screenshot of the page
await page.screenshot({ path: 'screenshots/before.png' , fullPage: true });

// 2. Locate the username textbox (shadow element)
const username = page.locator('input[title="user name field"]');

// 3. Enter the username  in the textbox
await username.fill("Bharath Reddy");

// take screenshot of the page
const shadowDomSection = page.locator('//h6[text()="Shadow DOM"]/ancestor::div[contains(@class,"e-child")]');
await shadowDomSection.screenshot({ path: 'screenshots/shadowDomSection.png'});
await page.screenshot({ path: 'screenshots/after.png' , fullPage: true });


});
