const express = require('express')
const router = express.Router()

router.get('/', employeesController.getAllEmployees)

router.get('/:id', employeesController.getEmployeeById)

router.get('firstname/:first_name', employeesController.getEmployeeByFirstName)
module.exports = router