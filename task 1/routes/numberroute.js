const express = require('express');
const router = express.Router();
const { fibonacciController,randomController,evenController,primeController } = require('../controllers/numbers');

router.get('/f', fibonacciController);
router.get('/r', randomController);
router.get('/e', evenController);
router.get('/p', primeController);

module.exports = router;