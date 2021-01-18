const express = require('express')
const controller = require('../controllers/employees')
const router = express.Router()

router.get('/', controller.getEmployees);

router.get('/:id', controller.getEmployeesById);

router.get('/getEmployeeSalaryById/:id', controller.getEmployeeSalaryById);

router.get('/getEmployeeDepartmentById/:id', controller.getEmployeeDepartmentById);

router.get('/firstname/:first_name', controller.getEmployeesByFirstName);

module.exports = router