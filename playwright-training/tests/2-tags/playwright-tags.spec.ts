import { test, expect } from '@playwright/test';

test('test1', {tag:'@smoke'}, async ({ page: any }) => {
    console.log('This is test1');
});

test('test2', {tag:'@regression'}, async ({ page: any }) => {
    console.log('This is test2');
});

test('test3', {tag:'@smoke'}, async ({ page: any }) => {
    console.log('This is test3');
});

test('test4', {tag:['@regression', '@sanity']}, async ({ page: any }) => {
    console.log('This is test4');
});