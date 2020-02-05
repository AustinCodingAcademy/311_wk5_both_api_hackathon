const express = require('express');
const router = express.Router();
let employees = require('../controllers/employees')

router.get('/', employees.getEmployees)

router.get('/:id', employees.getEmployeesById)

router.get('/firstname/:first_name', employees.getEmployeesByFirstName)

// router.get('/:id', employees.getEmployeesBySalary)

// router.get('/:id', employees.getEmployeesByAge)

// router.get('/:id')



module.exports = router;