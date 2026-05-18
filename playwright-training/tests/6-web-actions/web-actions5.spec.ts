import { test, expect } from '@playwright/test';

test('Web Actions - Handling shadow root', async ({ page }) => {

// 1. Enter URL and Launch the application (https://selectorshub.com/xpath-practice-page/)
await page.goto("https://selectorshub.com/xpath-practice-page/");

// 2. Locate the username textbox (shadow element)
const username = page.locator('input[title="user name field"]');

// 3. Enter the username  in the textbox
await username.fill("Bharath Reddy");

});
