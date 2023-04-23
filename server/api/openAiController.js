// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const generateImage = async (req, res) => {

//   const {prompt, size, n} = req.body

//     try {
//         const response = await openai.createImage({
//             prompt: "A cute baby sea otter",
//             n: 1,
//             size: "1024x1024",
//           });

//         const imageUrl = response.data.data[0].url;

//          res.status(200).json({
//          success: true,
//          data: imageUrl,

//         });
       
          
//     } catch (error) {
//         if (error.response) {
//             console.log(error.response.status);
//             console.log(error.response.data);
//           } else {
//             console.log(error.message);
//           }
//          res.status(400).json({
//          success:false,
//          error: "Imaginea nu poate fie generata"
//          })
   
//   }
// };

// module.exports = { generateImage };


const fetch = require('node-fetch');

const apiKey = '71ba12d2-883d-4b63-9760-367cd4de36f3';
const textUrl = 'YOUR_TEXT_URL';

fetch('https://api.deepai.org/api/text2img', {
  method: 'POST',
  headers: {
    'api-key': apiKey
  },
  body: JSON.stringify({
    text: textUrl
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
