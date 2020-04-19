const express = require('express');
const router = express.Router();
let employees = require('../controllers/employees')

router.get('/', employees.getEmployees)

router.get('/:emp_no', employees.getEmployeesById)

router.get('/first_name/:first_name', employees.getEmployeesByFirstName)

router.get('/salaries/:salary', employees.getEmployeesBySalary)

router.get('/titles/:title', employees.getEmployeesByTitle)

router.get('/departments/:dept_name', employees.getEmployeesByDept)

router.get('/departments/:dept_name/:no', employees.getEmployeesByDeptNameWithNumber)

// router.get('/salaries/salary/75000', employees.getEmployeesBySalary75KAbove)

router.get('/titles/title/seniorengineer', employees.getEmployeesSeniorEngineer)

module.exports = router;