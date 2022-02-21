const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employees');

router.get('/employees', employeeController.getEmployees);

router.get('/employees/:id', employeeController.getEmployeesById);

router.get('/employees/firstname/:first_name', employeeController.getEmployeesByFirstName);

module.exports = router;