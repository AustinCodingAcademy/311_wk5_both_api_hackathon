const express = require('express')
const router = express.Router()

const allEmployeesController = require('../controllers/getAllEmployees')
const employeeByFirstNameController = require('../controllers/getByFirstName')
const employeeByIdController = require('../controllers/getEmployeesById')


router.get('/employees', allEmployeesController.getEmployees)

router.get('/:id', employeeByIdController.getEmployeesById)

router.get('firstname/:first_name', employeeByFirstNameController.getEmployeesByFirstName)

module.exports = router;