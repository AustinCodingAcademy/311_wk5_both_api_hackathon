const express = require('express')
const employeesRouter = express.Router();
const employeesController = require('../controllers/employees.js')

employeesRouter.get('/employees', employeesController.getEmployees);

employeesRouter.get('/employees/id/:id', employeesController.getEmployeeById);

employeesRouter.get('/employees/firstname/:firstname', employeesController.getEmployeesByFirstName);

module.exports = employeesRouter;