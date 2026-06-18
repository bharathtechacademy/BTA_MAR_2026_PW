import { test, expect, request } from '@playwright/test';
import config from '../../config/config.json' with {type: 'json'};
import data from '../../testdata/ai/data.json' with {type: 'json'};

export class AICommons {

    private requestContext: any;
    private response: any;

    //Method to create the request context, meaning adding base URL, headers, authorization token, etc. 
    async initializeRequestContext() {
        this.requestContext = await request.newContext({
            baseURL: config.ollama.base_url,
            extraHTTPHeaders: {
                'Accept': 'application/json'
            }
        });
    }

    //Common method to send the request and get response 
    async getResponse(prompt :string, model :string) {
        const payload = data['prime-number'];
        payload.prompt = prompt;
        payload.model = model;
        this.response = await this.requestContext.post(config.ollama.endpoint, { data: payload });
        const responseBody = await this.response.json();
        return responseBody["response"];
    }

}