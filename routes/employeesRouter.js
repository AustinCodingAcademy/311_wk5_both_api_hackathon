const express = require('express');
const employeesController = require('../controllers/employeesController');
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();


router.get('/', employeesController.getEmployees);

router.get('/byid/:id', employeesController.getEmployeesById);

router.get('/byFirstName/:first_name', employeesController.getEmployeesByFirstName);

router.get('/salary', employeesController.getEmployeesSalary);

router.get('/byid/salary/:id', employeesController.getEmployeesByIdSalary);

router.get('/byFirstName/salary/:first_name', employeesController.getEmployeesByFirstNameSalary);

module.exports = router;;