const express = require('express')
const usersController = require('../controllers/employees')
const router = express.Router()

router.get('/', usersController.getEmployees)

router.get('/:id', usersController.getEmployeesById)

router.get('firstname/:first_name', usersController.getEmployeesByFirstName)



module.exports = router

