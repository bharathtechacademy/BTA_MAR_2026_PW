// Ollama => Ollama is an interface that can help us to connect with all the open LLMs. 


POST 

http://localhost:11434/api/generate


        { "model": "gemma3:1b",
          "prompt": "exaplain about gemma3:1b model in one line",
          "stream": false
        }
