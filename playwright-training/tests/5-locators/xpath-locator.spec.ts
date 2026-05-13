//XPath => XPath is all about XML path. 

//XPath Syntaxes 

//Syntax 1: //tagName[@attribute="attribute-value"]
//Syntax 2: //tagName[text()="text-value"]
//Syntax 3: //tagName[contains(@attribute,"attribute-value")]
//Syntax 4: //tagName[starts-with(@attribute,"attribute-value")]
//Syntax 5: //tagName[contains(text(),"text-value")]
//Syntax 6: //tagName[starts-with(text(),"text-value")]
//Syntax 7: //tagName[@attribute="attribute-value" and text()="text-value" and @attribute2="attribute-value2"]
//Syntax 8: Advanced XPath with relationship. 

// technique: target -> target's sibling -> parent -> ancestor -> ancestor's parent

//Syntax : referenceElementXPath/relationship::targetElementXPath

//child
//parent
//ancestor
//following-sibling
//preceding-sibling
//following
//preceding
// /->child
// // -> within the family tree.

//ancestor: //ul[@class="leftmenu"]
//parent : //li
//sibling : NA
//target element : //a[text()='Services']

//ul[@class="leftmenu"]/child::li/child::a[text()='Services']
//ul[@class="leftmenu"]//a[text()='Services']
//li[@class="Solutions"]/following-sibling::li/child::a[text()='Services']

import { test, expect } from '@playwright/test';

test('XPath Locator', async ({ page }) => {

    //Launch the para bank application. 
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Locate the 'logo' image using syntax 1. 
    await page.locator('//img[@class="logo"]');

    //Locate the 'caption' text using syntax 2.
    await page.locator('//p[text()="Experience the difference"]');
    
    //Locate the 'logo' image using syntax 3. 
    await page.locator('//img[contains(@src,"logo")]');

    //Locate the 'logo' image using syntax 4. 
    await page.locator('//img[starts-with(@src,"images/logo")]');

    //Locate the 'caption' text using syntax 5. 
    await page.locator('//p[contains(text(),"difference")]');

    //Locate the 'caption' text using syntax 6. 
    await page.locator('//p[starts-with(text(),"Experience")]');

    //Locate the 'caption' image using syntax 7.
    await page.locator('//p[@class="caption" and text()="Experience the difference"]');





});