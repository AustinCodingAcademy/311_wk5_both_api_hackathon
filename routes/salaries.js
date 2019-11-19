const express = require('express');
const router = express.Router();
const salariesController = require('../controllers/salaries');

router.get('/salaries/50/', salariesController.getSalaries);

router.get('/salaries/:id', salariesController.getSalariesById);

router.get('/bigmoney/big/money', salariesController.getSalariesRangeHigh);

module.exports = router;