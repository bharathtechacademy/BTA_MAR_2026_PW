//Web Actions are all about the default methods provided by Playwright to interact with each and every web element. 
//Assertion is all about the default method provided by Playwright to verify expected result versus actual result 

import { test, expect } from '@playwright/test';

test('Web Actions with Assertions', async ({ page }) => {

    //Launch the application. 
    await page.goto('https://www.example.com/');

    //Locate the element
    const element = page.locator('div#example');

    /* ================================================
               Common Web Element Validations
    ==================================================== */

    //Check if the element is visible 
    await expect(element).toBeVisible();

    //Check if the element is enabled
    await expect(element).toBeEnabled();

    //Check if the check box is checked already. 
    const checkbox = page.locator('input[type="checkbox"]');
    await expect(checkbox).toBeChecked();

    //Check if the element is hidden or disappeared. 
    const hiddenElement = page.locator('div#hidden');
    await expect(hiddenElement).toBeHidden();

    /* ================================================
               Button Element Validations
    ==================================================== */

    //Locate the element
    const button = page.locator('div#button');

    //Verify the label of the button. 
    const buttonLabelText = await button.textContent(); //If the button label is added as a text value 
    const buttonLabelValue = await button.getAttribute('value'); //If the button label is added as a attribute value 

    await expect(buttonLabelText).toBe("Login"); //user defined
    await expect(button).toHaveText("Login"); //playwright -default
    await expect(button).toHaveAttribute("value", "Log In");//playwright -default

    //Click on the button. 
    await button.click();

    //Double click on the button. 
    await button.dblclick();

    //Right click on the button. 
    await button.click({ button: 'right' });

    //Mouse hover over the button. 
    await button.hover();

    //Scroll till the button is getting displayed if the button is available somewhere at the bottom of the page. 
    await button.scrollIntoViewIfNeeded();

    //Force click on the button if the button is not responding or in a disabled state or covered by some other element
    await button.click({ force: true });

    /* ================================================
          Textbox Element Validations
    ==================================================== */

    //Locate the element
    const textbox = page.locator('div#textbox');

    //Clear the existing text value from the text box. 
    await textbox.clear();

    //Verify the placeholder of the text box to identify the text box purpose. 
    const placeholder = await textbox.getAttribute('placeholder');
    
    //Type the text within the text box. 
    await textbox.fill('Bharath Reddy');

    //Press the function keys within the text box. 
    await textbox.press('Control+A');
    await textbox.press('Backspace');

    //Verify the value entered into the text box. 
    const textEntered = await textbox.getAttribute('value');
    await expect(textEntered).toBe('Bharath Reddy');
    await expect(textbox).toHaveValue('Bharath Reddy');


});