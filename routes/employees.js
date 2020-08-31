const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employees')

router.get('/', employeesController.getEmployees)

router.get('/:id', employeesController.getEmployeeById)

// router.get('firstname/:first_name', employeesController.getEmployeeByFirstName)

module.exports = router