const express = require('express');
const router = express.Router();

const salariesController = require('../controllers/employees')

// Get all users
router.get('/', salariesController.getEmployees)

//get user by id
router.get('/:id', salariesController.getEmployeesById)

// get user by first name
router.get('/firstname/:firstName', salariesController.getEmployeesByFirstName)

module.exports = router;