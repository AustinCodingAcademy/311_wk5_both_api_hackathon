const express = require('express');
const router = express.Router();
const salariesController = require('../controllers/salaries');

router.get('/', salariesController.getSalaries);
router.get('/sumsalaries', salariesController.sumOfSalaries);
router.get('/:id', salariesController.getSalariesById);
// router.get('/highpay', salariesController.getHighestPaidEmployees);

module.exports = router; 