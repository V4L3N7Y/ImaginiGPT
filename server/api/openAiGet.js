const axios = require("axios");
require('dotenv').config();

class OpenAI {

    /**
     * Generates an image using the OpenAI API with the specified prompt, n and size.
     *
     * @param {string} prompt The prompt to generate the image from.
     * @param {number} n The number of images to generate.
     * @param {string} size The size of the images to generate.
     * @return {Promise} The response from the OpenAI API call.
     */
    generateImage = async (prompt, n, size) => {

        const apiUrl = "https://api.openai.com/v1/images/generations";
        const apiKey = process.env.OPENAI_API_KEY;

        // Construct the query parameters for the API request
        const params = {
            prompt: prompt,
            n: n,
            size: size
        };

        // Set the headers for the API request
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        };

        // Awaitable call to generate the image using the OpenAI API and then return the data.
        try {
            const response = await axios.post(apiUrl, params, { headers });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}


module.exports = OpenAI;