const express = require('express');
const router = express.Router();
const salariesController = require('../controllers/salaries');

router.get('/bigmoney', salariesController.getTopPaidEmployees);

router.get('/salarysum', salariesController.sumOfSalaries);

router.get('/:id', salariesController.getSalariesById);

module.exports = router;