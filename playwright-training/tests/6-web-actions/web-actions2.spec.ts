import { test, expect } from '@playwright/test';

test('Demo QA Practice Form Validations ', async ({ page }) => {

    // 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    page.goto("https://demoqa.com/automation-practice-form");

    // 2. Wait for Page-load
    const pageHeader = await page.locator('//h1[text()="Practice Form"]');
    await expect(pageHeader).toBeVisible();

    // 3. Enter First name and Last name
    const firstName = await page.locator('input[id="firstName"]');
    const lastName = await page.locator('input[id="lastName"]');

    await firstName.fill("Bharath");
    await lastName.fill("Reddy");

    // 4. Enter Email
    const email = await page.locator('input[id="userEmail"]');
    email.fill("BharathTechAcademy@gmail.com");

    // 5. Select Gender (Male)
    await selectGender(page, "Male");

    // 6. Enter mobile number
    const mobile = await page.locator('input[id="userNumber"]');
    await mobile.fill("9553220022");

    // 7.Select DOB (1-Feb-1991)
    await selectDOB(page, "1", "February", "1991");

    // 8.Search and Select Computer Science and English
    const subjects: string[] = ["Computer Science", "English"];
    await selectSubject(page, subjects);

    // 9.Select Hobbies as Sports and Reading
    const hobbies: string[] = ["Sports", "Reading"];
    await selectHobbies(page, hobbies);

    // 10.Upload photo
    const uploadInput = await page.locator('input[id="uploadPicture"]');
    const filePath = "files/Bharath.png";
    await uploadInput.setInputFiles(filePath);

    // 11.Submit Details
    const submitButton = await page.locator('button[id="submit"]');
    await submitButton.click();

});

async function selectHobbies(page: any, hobbies: string[]) {
    for (const hobby of hobbies) {
        const hobbyLocator = await page.locator(`//label[text()="${hobby}"]`);
        await hobbyLocator.click();
    }
}

async function selectGender(page: any, option: string) {
    const gender = await page.locator(`input[value="${option}"]`);
    await gender.check();
}

async function selectDOB(page: any, date: string, month: string, year: string) {

    //Locate the date of birth input field and click on it to open the date picker
    const dobInput = await page.locator('input[id="dateOfBirthInput"]');
    await dobInput.click();

    //Select the month from the month dropdown
    const monthDropdown = await page.locator('select.react-datepicker__month-select');
    await monthDropdown.selectOption({ label: month });

    //Select the year from the year dropdown
    const yearDropdown = await page.locator('select.react-datepicker__year-select');
    await yearDropdown.selectOption({ label: year });

    //Select the date from the date picker
    const dateLocator = await page.locator(`//div[contains(@aria-label,"${month}") and text()="${date}"]`);
    await dateLocator.click();
}

async function selectSubject(page: any, subjects: string[]) {

    //Locate the subject input box and click on it. 
    const subjectInput = await page.locator('div[class*="subjects-auto-complete__input-container"]');
    await subjectInput.click();

    //Locate the Subject Input Internal Container. 
    const subjectInputInternal = await page.locator('input[id="subjectsInput"]');

    //Select the subjects provided in the array. 
    for (const subject of subjects) {

        //Enter the subject. 
        await subjectInputInternal.fill(subject);

        //Press Enter to select the subject from the auto-suggested options.
        await subjectInputInternal.press('Enter');
    }
}