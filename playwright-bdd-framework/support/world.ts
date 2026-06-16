import {World, IWorldOptions,setWorldConstructor} from '@cucumber/cucumber';
import { Page } from '@playwright/test';
import {LoginPageSteps} from '../page-objects/page-steps/login-page-steps.ts';
import {HomePageSteps} from '../page-objects/page-steps/home-page-steps.ts';
import {CookiesPageSteps} from '../page-objects/page-steps/cookies-page-steps.ts';

class PlaywrightWorld extends World {
page!:Page;
loginPageSteps!:LoginPageSteps;
homePageSteps!:HomePageSteps
cookiesPageSteps!:CookiesPageSteps;

constructor(options:IWorldOptions){
    super(options);
}

initializePageObjects(){
    this.loginPageSteps = new LoginPageSteps(this.page);
    this.homePageSteps = new HomePageSteps(this.page);
    this.cookiesPageSteps = new CookiesPageSteps(this.page);    
}

}

export default PlaywrightWorld;
setWorldConstructor(PlaywrightWorld);

// World : World is a class provided by the cucumber.js file that represents the context in which your step definitions are executed. 
// IWorldOptions : My World Options is an interface provided by Cucumber.js that defines the options that can be passed to the world file. 
// setWorldConstructor : This function is used to set the custom world constructor for Cucumber.js.
// World : World is a class provided by the cucumber.js file that represents the context in which your step definitions are executed. 
// IWorldOptions : My World Options is an interface provided by Cucumber.js that defines the options that can be passed to the world file. 
// setWorldConstructor