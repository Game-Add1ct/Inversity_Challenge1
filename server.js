const express = require('express');
const cors = require('cors');
const axios = require('axios');

// import 'express'
// import 'cors'
// import { cors } from 'cors'
// import { axios } from 'axios'
const app = express();
const port = 3000;
// const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
import { main } from './script.js'

app.use(express.json()); // To parse JSON request bodies
app.use(cors()); 

app.post('/api/chat', async (req, res) => {
    main()
    // const prompt = req.body.prompt;

    // try {
    //     const response = await axios.post(API_ENDPOINT, {
    //         messages: [{ role: 'user', content: prompt }],
    //         max_tokens: 800,
    //         temperature: 0.7,
    //     }, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${API_KEY}`,
    //         },
    //     });

    //     const aiResponse = response.data.choices[0].message.content;
    //     res.json({ response: aiResponse });

    // } catch (error) {
    //     console.error('Error:', error);
    //     res.status(500).json({ error: 'Failed to get AI response' });
    // }
    // getResponse()
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
