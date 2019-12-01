


const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees')

router.get('/employees', employeesController.getEmployees);
router.get('/employees/:emp_no', employeesController.getEmployeesById);
router.get('/first_name/:first_name', employeesController.getEmployeesByFirstName);
router.get('/salaries/employees/:id', employeesController.getEmployeesSalary);
router.get('/departments/employees/:id', employeesController.getEmployeesDepartment);
router.get('/salaries/:employees/:emp_no', employeesController.getOneSalaryById);

module.exports = router 


