const dotenv = require('dotenv').config();
const express = require('express');


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// // Use API routes from the api folder
 
 app.use("/api", require("./api/openAiRoutes"));

 app.listen(port, () => console.log(`Listening on port ${port}`));

