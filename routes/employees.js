


const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees')

router.get('/employees', employeesController.getEmployees);
router.get('/employees/:emp_no', employeesController.getEmployeesById);
router.get('/first_name/:first_name', employeesController.getEmployeesByFirstName);
//Return the employee by id with salary information
//There should be a property on the employee object called salary with a number value
router.get('/salaries/employees/:id', employeesController.getEmployeesSalary);
//Return the employee with department information
//There should be a property on the employee object called departments that is an array
router.get('/departments/employees/:id', employeesController.getEmployeesDepartment);
//Return the salary of one employee by id
//Does it make sense to show all salaries?
router.get('/salaries/:empid', employeesController.getOneSalaryById);




module.exports = router 


