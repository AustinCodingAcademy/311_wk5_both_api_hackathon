const express = require('express');
const employeesController = require('../controllers/employeesController');
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();


router.get('/', employeesController.getEmployees);

router.get('/:id', employeesController.getEmployeesById);

router.get('/:first_name', employeesController.getEmployeesByFirstName);

module.exports = router;;