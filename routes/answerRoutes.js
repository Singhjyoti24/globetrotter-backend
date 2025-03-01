const express = require('express');
const router = express.Router();
const { evaluateAnswer } = require('../controllers/answerController');

router.post('/answer', evaluateAnswer);

module.exports = router;