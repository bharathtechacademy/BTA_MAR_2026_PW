//Annotations are a set of keywords and default methods that will help us to run all our test cases. 

//test ==> test refers to an independent test method to be executed by Playwright. 
//test.describe ==> test.describe is used to group multiple test cases together. It helps us to organize our test cases in a better way.


//test.only() ==> test.only is used to run only a specific test case or a group of test cases. It is useful when we want to focus on a particular test case or a group of test cases while debugging or developing our tests.
//test.skip() ==> test.skip is used to skip a specific test case or a group of test cases. It is useful when we want to temporarily disable a test case or a group of test cases while debugging or developing our tests.
//test.fixme() ==> test.fixme is used to mark a specific test case or a group of test cases as "to be fixed". It is useful when we want to indicate that a test case or a group of test cases is currently broken and needs to be fixed before it can be run successfully.
//test.fail() ==> test.fail is used to mark a specific test case or a group of test cases as "expected to fail". It is useful when we want to indicate that a test case or a group of test cases is currently failing and we are aware of it, but we still want to run it to see the failure in action.
//test.slow() ==> test.slow is used to mark a specific test case or a group of test cases as "slow". It is useful when we want to indicate that a test case or a group of test cases takes a long time to execute and we want to give it more time to complete before it is marked as failed.

import { test, expect } from '@playwright/test';

//independent test case
test('independent test case', async ({ page: any }) => {
    console.log('This is an independent test case');
});

//Group of test cases
test.describe('group1', () => {

    test('test case 1', async ({ page: any }) => {
        console.log('This is test case 1');
    });

    test('test case 2', async ({ page: any }) => {
        console.log('This is test case 2');
    });

    test('test case 3', async ({ page: any }) => {
        console.log('This is test case 3');
    });

});

//Group of test cases
test.describe('group2', () => {

    test('test case 1-group 2', async ({ page: any }) => {
        console.log('This is test case 1-group 2');
    });

    test('test case 2-group 2', async ({ page: any }) => {
        console.log('This is test case 2-group 2');
    });

    test('test case 3-group 2', async ({ page: any }) => {
        console.log('This is test case 3-group 2');
    });

});