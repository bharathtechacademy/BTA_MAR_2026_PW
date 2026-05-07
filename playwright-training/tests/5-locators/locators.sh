// Locators : Locators are nothing but the default methods provided by Playwright to identify the location of web elements. 

//There are mainly 9 different locator techniques we have within the Playwright to identify the location of a web element. 

//1.getByRole() : This method is used to identify the location of a web element based on its role.
//2.getByLabel() : This method is used to identify the location of a web element based on its label text.
//3.getByPlaceholder() : This method is used to identify the location of a web element based on its placeholder text.
//4.getByText() : This method is used to identify the location of a web element based on its text content.
//5.getByAltText() : This method is used to identify the location of a web element based on its alt text.
//6.getByTitle() : This method is used to identify the location of a web element based on its title attribute.
//7.getByTestId() : This method is used to identify the location of a web element based on its test id attribute.
//8.xpath -> locator() : This method is used to identify the location of a web element based on its xpath.
//9.css -> locator() : This method is used to identify the location of a web element based on its css selector.



//Syntax to locate WebElement 
//const element = page.locator('locator strategy');

//1.getByRole() : This method is used to identify the location of a web element based on its role.

//Syntax : const element = page.getByRole('role', { name: 'value' });

//in the place of role : role -> textbox, button, link, checkbox, radio
//in the place of value : value -> name or placeholder or text value
const firstName = page.getByRole('checkbox',{name:'Sports'})

//2.getByLabel() : This method is used to identify the location of a web element based on its label text.(label = "Music")
const musicCheckbox = page.getByLabel('Music')

//3.getByPlaceholder() : This method is used to identify the location of a web element based on its placeholder text.(placeholder = "Last Name")
const lastName = page.getByPlaceholder('Last Name');

//4.getByText() : This method is used to identify the location of a web element based on its text content.(blackTextValue = "Welcome to Playwright Training")
const heading = page.getByText('Welcome to Playwright Training');

//5.getByAltText() : This method is used to identify the location of a web element based on its alt text.(alt = "ParaBank")
const parabankLogo = page.getByAltText('ParaBank');

//6.getByTitle() : This method is used to identify the location of a web element based on its title attribute. (title = "ParaBank")
const parabankLogoByTitle = page.getByTitle('ParaBank');

//7.getByTestId() : This method is used to identify the location of a web element based on its test id attribute. (data-testid = "submit-button")
const submitButton = page.getByTestId('submit-button');
