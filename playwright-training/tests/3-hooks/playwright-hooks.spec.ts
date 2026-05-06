//Hooks are nothing but a set of pre and post conditions that will execute before and after test execution. 

//beforeAll : This will run before executing all the test cases within the spec file. 
//afterAll : This will run after executing all the test cases within the spec file.
//beforeEach : This will run before executing each test case within the spec file. 
//afterEach : This will run after executing each test case within the spec file.

import { test, expect } from '@playwright/test';

test.describe('Group 1 Tests', async () => {

    test('Group 1- Test 1', async ({ page }) => {
        console.log("Group 1 - Test 1: Executing");
    });

    test('Group 1- Test 2', async ({ page }) => {
        console.log("Group 1 - Test 2: Executing");
    });

    test('Group 1- Test 3', async ({ page }) => {
        console.log("Group 1 - Test 3: Executing");
    });

});


test.describe('Group 2 Tests', async () => {

    test.beforeAll(async () => {
        console.log("^^^^^^^^^^^^Group 2 - Before All: Executing^^^^^^^^^^^^^^^^");
    });

    test.afterAll(async () => {
        console.log("vvvvvvvvvvGroup 2 - After All: Executingvvvvvvvvvv");
    });

    test.beforeEach(async () => {
        console.log("@@@@@@@@@Group 2 - Before Each: Executing@@@@@@@@@@@");
    });

    test.afterEach(async () => {
        console.log("##########Group 2 - After Each: Executing##########");
    });

    test('Group 2- Test 1', async ({ page }) => {
        console.log("Group 2 - Test 1: Executing");
    });

    test('Group 2- Test 2', async ({ page }) => {
        console.log("Group 2 - Test 2: Executing");
    });

    test('Group 2- Test 3', async ({ page }) => {
        console.log("Group 2 - Test 3: Executing");
    });

});