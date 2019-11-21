const express = require('express')
const usersController = require('../controllers/employees')
const router = express.Router()

router.get('/', usersController.getEmployees)

router.get('/:id', usersController.getEmployeesById)

router.get('firstname/:first_name', usersController.getEmployeesByFirstName)

router.get('/salaries/employees/:id', usersController.getIdWithSalary);

router.get('/departments/employees/:id', usersController.getIdWithDepartment);

router.get('/salaries/:empid', usersController.getSalaryById);


module.exports = router

