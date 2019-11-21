const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees');

router.get('/', employeesController.getEmployees);

router.get('/:emp_no', employeesController.getEmployeesByEmp_no);

router.get('/:first_name', employeesController.getEmployeesByFirstName);

  module.exports = router 