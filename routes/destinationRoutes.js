const express = require('express');
const router = express.Router();
const { getRandomDestination } = require('../controllers/destinationController');

router.get('/random', getRandomDestination);

module.exports = router;