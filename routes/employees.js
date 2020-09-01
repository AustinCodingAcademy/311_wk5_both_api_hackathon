const express = require('express')
const router = express.Router()

const getEmployeeByIdController = require('../controllers/employees/getbyid')
const getAllEmployeesController = require('../controllers/employees/getall')
const createEmployeeController = require('../controllers/employees/create')
const updateEmployeeController = require('../controllers/employees/update')
const deleteEmployeeController = require('../controllers/employees/delete')

router.get('/', getAllEmployeesController.getEmployees)

router.get('/:id', getEmployeeByIdController.getEmployeeById)

router.post('/', createEmployeeController.createEmployee)

router.put('/:id', updateEmployeeController.updateEmployee)

router.delete('/:id', deleteEmployeeController.deleteEmployee)

module.exports = router