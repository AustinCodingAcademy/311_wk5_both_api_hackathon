const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()

router.get('/', employeesController.getEmployees);

router.get('/:id', employeesController.getEmployeesById);

// router.get('/name/:first_name', employeesController.getEmployeesByFirstName);

router.get('/first_name/:first_name', employeesController.getEmployeesByFirstName);

//I can only get either one or the other to work. It depends on the order they have.

// router.get('/employees/:first_name', employeesController.getEmployeesByFirstName)


module.exports = router