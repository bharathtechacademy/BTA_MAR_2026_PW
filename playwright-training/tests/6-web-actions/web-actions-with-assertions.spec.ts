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
    const checkbox1 = page.locator('input[type="checkbox"]');
    await expect(checkbox1).toBeChecked();

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

    /* ================================================
      Checkbox Element Validations
==================================================== */

    //Locate the element
    const checkbox = page.locator('input#checkbox1');

    //Check the check box if it is not checked already.
    const isChecked = await checkbox.isChecked();
    if (!isChecked) {
        await checkbox.check();
    }

    /* ================================================
  Dropdown Element Validations
==================================================== */

    //Locate the element
    const dropdown = page.locator('select#dropdown');

    //Select the option from the drop-down. 
    await dropdown.selectOption({ label: 'JMS' });
    await dropdown.selectOption({ value: 'jms' });
    await dropdown.selectOption({ index: 0 });

    //Verify whether the drop down is a multi-select drop down. 
    const isMultiple = await dropdown.getAttribute('multiple');
    if (isMultiple) {
        console.log('The drop-down is a multi-select drop-down');
    } else {
        console.log('The drop-down is not a multi-select drop-down');
    }

    //Select multiple options from the drop-down.
    await dropdown.selectOption({ label: 'JMS' });
    await dropdown.selectOption({ value: 'jms' });
    await dropdown.selectOption({ index: 0 });

    //Deselect multiple options from the drop-down. 
    await dropdown.selectOption({ label: 'JMS' });
    await dropdown.selectOption({ value: 'jms' });
    await dropdown.selectOption({ index: 0 });

    //Verify the selected option from the drop-down. 
    const selectedOption = await dropdown.inputValue();
    await expect(selectedOption).toBe('jms'); //user defined

    //Verify all the options available in the drop-down. 
    const options = await dropdown.locator('option').allTextContents();
    const expectedOptions = ['Select', 'JMS', 'Selenium', 'Cypress'];
    await expect(options).toEqual(expectedOptions); //user defined

    /* ================================================
  Radio button Element Validations
==================================================== */
    //Locate the element
    const radioButton = page.locator('input[name="radio"]');

    //check the radio button
    await radioButton.check();

    //Verify the radio button is checked or not. 
    await expect(radioButton).toBeChecked();

    /* ================================================
Image Element Validations
==================================================== */

    //Locate the element
    const image = page.locator('img#image');

    //Verify the image is displayed within the page. 
    await expect(image).toBeVisible();

    //Verify whether the image is valid or not by using the source path. 
    const source = await image.getAttribute('src');
    await expect(source).toBe('actual-path');

    //Verify the image size or resolution. 
    const imageSize = await image.boundingBox();
    const width = imageSize?.width;
    const height = imageSize?.height;

    //Verify the image position within the application. 
    const imagePosition = await image.boundingBox();
    const x = imagePosition?.x;
    const y = imagePosition?.y;

    /* ================================================
Hyperlink Element Validations
==================================================== */

    //Locate the element
    const hyperlink = await page.locator('a#link');

    //Verify the hyperlink. (method 1)
    const href = await hyperlink.getAttribute('href');
    await expect(href).toBe('https://www.example.com/expected-link');

    //Verify the hyperlink. (method 2)
    await hyperlink.click();
    await expect(page).toHaveURL('https://www.example.com/expected-link');

    /* ================================================
Text Element Validations
==================================================== */

    //Locate the element
    const textElement = page.locator('div#text');

    //Verify the text content of the element. 
    const textContent = await textElement.textContent();
    await expect(textContent).toBe('Expected Text');

    /* ================================================
Upload Element Validations
==================================================== */

    //Locate the element
    const fileInput = page.locator('input[type="file"]');

    //Upload the file using the file input element. 
    await fileInput.setInputFiles('path/to/file.txt');


    /* ================================================
Alert Validations
==================================================== */

    // Locate the element to trigger the alert. 
    const alertButton = await page.locator('button#alert');

    //Inform Playwright about the alert and what action needs to be taken if the alert comes. 
    page.on('dialog', async dialog => {

        //Copy the message from the alert. 
        const alertMessage = dialog.message();

        //Click on the OK button within the alert. 
        await dialog.accept();

        //Click on the Cancel button within the alert. 
        await dialog.dismiss();

        //Enter text within the alert and then click on the accept button. 
        await dialog.accept("text-to-enter");
    })

    //click on the button and get the alert
    await alertButton.click();

    /* ================================================
                Frame Validations
    ==================================================== */

    //Look at the main page element that contains frames. 
    const mainElemntWithFrame = page.frameLocator('iframe[id="frame1"]');

    //Switch to the frame and perform actions within the frame. 
    const frameElement = await mainElemntWithFrame.locator('div#frameElement');
    await expect(frameElement).toBeVisible();
    await frameElement.click();


});