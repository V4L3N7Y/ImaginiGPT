// Use express's router to route all our API endpoints
const express = require('express');
const router = express.Router();

// Use the OpenAi class we made in ./openAiGet.js to call our method that will get the  data from the api
const OpenAi = require("./openAiGet");

// GET Request - statically get the openai data from the openai api
router.get("/openAiGet",  async (req, res) => {
    let openai = new OpenAi();
    
    // Fixing the params of zipcode and tempMetric for an example GET request
    let openAiData = await openai.generateImage(prompt, n, size);

    // Content that will be sent will be a prettified json
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(openAiData, null, 4));
});

// POST Request - dynamically get the openai data based on request body
router.post("/openAiGet",  async (req, res) => {
    const {prompt, n, size} = req.body;
    let openai = new OpenAi();
    
    // The params for prompt, n, size are dynamic
    let openAiData = await openai.generateImage(prompt, n, size);

    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(openAiData, null, 4));
});

module.exports = router;