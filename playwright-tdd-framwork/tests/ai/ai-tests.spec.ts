import {test, expect, request} from '@playwright/test';
import {AICommons} from '../../commons/ai/ai-commons.js';

test('AI Test - Prime Number', async () => {
    const aiCommons = new AICommons();
    await aiCommons.initializeRequestContext();
    const prompt = "Is 7 a prime number?";
    const model = "llama3.2:1b";
    const response = await aiCommons.getResponse(prompt, model);
    console.log(response)
});