const express = require('express');
const router = express.Router();

const salariesController = require('../controllers/salaries')


router.get('/:name', salariesController.getSalariesByDepartment)

router.get('/employees/:id', salariesController.getSalarieByEmployeeId)

router.get('/employees/current/:id', salariesController.getCurrentSalarieByEmployeeId)

module.exports = router;