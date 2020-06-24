const express = require('express')
const router = express.Router()
const getEmployeesByFirstNameController = require('../controllers/getEmployeesByFirstName')
const getEmployeesByIdController = require('../controllers/getEmployeesById')
//const getEmployeesController = require('../controllers/getEmployees')

//router.get('/', getEmployeesController.getEmployees)

router.get('/:id', getEmployeesByIdController.getEmployeesById)

router.get('/firstname/:first_name', getEmployeesByFirstNameController.getEmployeesByFirstName)

module.exports = router