const express = require('express')
const controller = require('../controllers/employees')
const router = express.Router()

router.get('/', controller.getEmployees);

router.get('/:id', controller.getEmployeesById);

router.get('firstname/:first_name', controller.getEmployeesByFirstName);

modules.export = router;