const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employees')
const createEmployeeController = require('../controllers/employees/create')
const updateEmployeeController = require('../controllers/employees/update')
const deleteEmployeeController = require('../controllers/employees/delete')

router.get('/', employeesController.getEmployees)

router.get('/:id', employeesController.getEmployeeById)

router.get('/firstname/:first_name', employeesController.getEmployeeByFirstName)

router.post('/', createEmployeeController.createEmployee)

router.put('/:id', updateEmployeeController.updateEmployee)

router.delete('firstname/:first_name', deleteEmployeeController.deleteEmployee)

module.exports = router