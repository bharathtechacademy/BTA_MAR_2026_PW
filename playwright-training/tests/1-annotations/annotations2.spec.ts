import { test, expect } from '@playwright/test';

test('test1', async ({ page: any }) => {
    test.slow(); //it will wait 3X the default timeout before marking the test as failed
    console.log('This is test1');
    expect(1).toBe(1);
    //add 35 seconds delay to test1
    await new Promise(resolve => setTimeout(resolve, 35000));
    console.log('This is test1 after 35 seconds delay');
});

test('test2', async ({ page: any }) => {
    console.log('This is test2');
    
});

test('test3', async ({ page: any }) => {
    console.log('This is test3');
});