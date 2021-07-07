const express = require('express')
const router = express.Router()

const getEmployeeByIdController = require('../controllers/employees/getById')
const getEmployeeByNameController = require('../controllers/employees/getByFirstName')
const getAllEmployeesController = require('../controllers/employees/getAll')
const createEmployeeController = require('../controllers/employees/create')
const updateEmployeeController = require('../controllers/employees/update')
const deleteEmployeeController = require('../controllers/employees/delete')

router.get('/', getAllEmployeesController.getEmployees)

router.get('/:emp_no', getEmployeeByIdController.getEmployeeById)

router.get('/:first_name', getEmployeeByNameController.getEmployeeByFirstName)

router.post('/', createEmployeeController.createEmployee)

router.put('/:emp_no', updateEmployeeController.updateEmployee)

router.delete('/:emp_no', deleteEmployeeController.deleteEmployee)

module.exports = router