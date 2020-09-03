const express = require('express')
const router = express.Router()

const getEmployeeByIdController = require('../controllers/employees/getById')
const getAllEmployeesController = require('../controllers/employees/getAll')
const createEmployeeController = require('../controllers/employees/create')
const updateEmployeeController = require('../controllers/employees/update')
const deleteEmployeeController = require('../controllers/employees/delete')

router.get('/', getAllEmployeesController.getEmployees)

router.get('/:emp_no', getEmployeeByIdController.getEmployeeById)

// router.post('/', createEmployeeController.createEmployee) // need to create function

router.put('/:emp_no', updateEmployeeController.updateEmployee)

router.delete('/:emp_no', deleteEmployeeController.deleteEmployee)

module.exports = router