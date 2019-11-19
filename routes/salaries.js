const express = require('express');
const router = express.Router();
const salariesController = require('../controllers/salaries');

router.get('/salaries/:salaries', salariesController.getSalaries);

router.get('/salaries/:id', salariesController.getSalariesById);

router.get('/salaries/over100k', salariesController.getSalariesRangeHigh);

module.exports = router;