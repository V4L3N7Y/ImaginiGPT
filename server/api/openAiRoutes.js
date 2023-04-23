const express = require('express');
const { generateImage } = require('./openAiController');
const router = express.Router();

router.post('/generateimage', generateImage)

module.exports = router;