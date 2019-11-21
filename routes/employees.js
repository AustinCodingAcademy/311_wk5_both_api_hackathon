const express = require('express')
const usersController = require('../controllers/employees')
const router = express.Router()

router.get('/', usersController.getEmployees)

router.get('/:id', usersController.getEmployeesById)

router.get('/first_name/:first_name', usersController.getEmployeesByFirstName)

router.get('/salaries/:id', usersController.getSalaryWithId);

router.get('/departments/employees/:id', usersController.getIdWithDepartment);

router.get('/departments', usersController.getDepartments);

router.get('/titles', usersController.getTitles);

router.get('/salaries/salary/:id', usersController.getIdWithSalary);







module.exports = router 

