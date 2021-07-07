const express = require('express');
const router = express.Router();

const employeesController = require('../controllers/employees')

// Get all users
router.get('/', employeesController.getEmployees)

//get user by id
router.get('/:id', employeesController.getEmployeesById)

// get user by first name
router.get('/firstname/:firstName', employeesController.getEmployeesByFirstName)

module.exports = router;