const express = require('express');
const router = express.Router();
let employees = require('../controllers/employees')

router.get('/', employees.getEmployees)

router.get('/:id', employees.getEmployeesById)

router.get('/firstname/:first_name', employees.getEmployeesByFirstName)

router.get('/salaries/:salary', employees.getEmployeesBySalary)

router.get('/titles/:title', employees.getEmployeesByTitle)

router.get('/departments/:dept_name', employees.getEmployeesByDept)

router.get('/departments/:dept_name', employees.getEmployeesByDeptName)

router.get('/salaries/:/salary75K', employees.getEmployeesBySalary75KAbove)

router.get('/titles/:title/SeniorEngineer', employees.getEmployeesSeniorEngineer)

module.exports = router;