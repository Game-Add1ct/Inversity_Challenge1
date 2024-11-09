// const { AzureOpenAI } = require("openai");
import { AzureOpenAI } from "openai";
// const { 
//   DefaultAzureCredential, 
//   getBearerTokenProvider 
// } = require("@azure/identity");
// const { default: OpenAI } = require("openai");

// You will need to set these environment variables or edit the following values
const endpoint = 'https://educationhackathon.openai.azure.com/';
const apiVersion = "2024-08-01-preview";
const deployment = "gpt-4o"; //This must match your deployment name.
const apiKey = ' F4t6ZhKWbThgotYQuaNURBVcJsDcqL4xkebqwPiVrVHw3s8d7dTjJQQJ99AKACfhMk5XJ3w3AAABACOGoNkI'


// keyless authentication    
// const credential = new DefaultAzureCredential();
// const scope = "https://cognitiveservices.azure.com/.default";
// const azureADTokenProvider = getBearerTokenProvider(credential, scope);

async function main() {

  const client = new AzureOpenAI({ apiVersion,endpoint, apiKey, deployment });
  const result = await client.chat.completions.create({
    messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Does Azure OpenAI support customer managed keys?" },
    { role: "assistant", content: "Yes, customer managed keys are supported by Azure OpenAI?" },
    { role: "user", content: "Do other Azure AI services support this too?" },
    ],
    model: "",
  });

  for (const choice of result.choices) {
    console.log(choice.message);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

export { main };