const express = require('express');
const router = express.Router();
let employees = require('../controllers/employees')

router.get('/', employees.getEmployees)

router.get('/:id', employees.getEmployeesById)

router.get('/firstname/:first_name', employees.getEmployeesByFirstName)

module.exports = router;