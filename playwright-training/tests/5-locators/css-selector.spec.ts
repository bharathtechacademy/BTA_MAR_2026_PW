//CSS Selector: CSS Select Tree is all about locating the elements by using CSS properties of the Web Elements. 

//CSS Selector Syntaxes

//Syntax 1: tagName#id
//Syntax 2: tagName.className
//Syntax 3: tagName[attribute="attribute-value "]
//Syntax 4: tagName[attribute*="attribute-value"] //* refers contains
//Syntax 5: tagName[attribute^="attribute-value "] //^ refers starts with
//Syntax 6: tagName[attribute$="attribute-value "] //$ refers ends with
//Syntax 7: tagName[attribute1="attribute-value "][attribute2="attribute-value "]
//Syntax 8: Advanced CSS selector with relationship. 

// technique: target -> parent -> ancestor -> ancestor's parent

//css selector: ancestor's parent > ancestor > parent > target'

// ancestor : ul[class="leftmenu"]
// parent element : li
// target element : a[href="services.htm"]

// ul[class="leftmenu"] > li > a[href="services.htm"]

import { test, expect } from '@playwright/test';

test('CSS Selector', async ({ page }) => {

//Launch the Google application. 
await page.goto('https://www.google.com/');

//Locate the 'Google search' text box using syntax 1. 
await page.locator('textarea#APjFqb');

//Locate the 'Google search' text box using syntax 2. 
await page.locator('textarea.gLFyf');

//Locate the 'Google search' text box using syntax 3. 
await page.locator('textarea[title="Search"]');

//Locate the 'How Search Works' Hyperlink using syntax 4. 
await page.locator('a[href*="howsearchworks"]');

//Locate the 'Google search' text box using syntax 5. 
await page.locator('textarea[title^="Sea"]');

//Locate the 'Google search' text box using syntax 6. 
await page.locator('textarea[title$="rch"]');

//Locate the 'Google search' text box using syntax 7. 
await page.locator('textarea[title="Search"][aria-label="Search"]');

//Launch the Parabank application by using URL www.parabank.com. 
await page.goto('https://parabank.parasoft.com/parabank/index.htm');

//Locate the 'Services' Hyperlink using syntax 8. 
await page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');


});