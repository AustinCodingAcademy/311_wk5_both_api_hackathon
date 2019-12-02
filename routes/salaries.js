const express = require('express');
const router = express.Router();
const salariesController = require('../controllers/salaries');

router.get('/', salariesController.getSalaries);

// router.get('/highpay', salariesController.getHighestPaidEmployees);

router.get('/sumsalary', salariesController.sumOfSalaries);

router.get('/:id', salariesController.getSalariesById);

module.exports = router; 