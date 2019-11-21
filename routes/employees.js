const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees');

router.get('/', employeesController.getEmployees);

router.get('/:emp_no', employeesController.getEmployeesByEmp_no);

router.get('/firstname/:first_name', employeesController.getEmployeesByFirstName);

router.get('/salaries/employees/:emp_no', employeesController.getEmployeesSalaries);

router.get('/departments/:dept_name', employeesController.getEmployeesDepartment);
  module.exports = router 