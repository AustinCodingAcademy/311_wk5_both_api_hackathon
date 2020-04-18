const express = require('express');
const router = express.Router();

const getEmployeesController = require('../controllers/getEmployees');
const getEmployeesByFirstNameController = require('../controllers/getEmployeesByFirstName');
const getEmployeesSalaryController = require('../controllers/getEmployeesSalary');
const getEmployeesByIdController = require('../controllers/getEmployeesById');



router.get('/', getEmployeesController.getEmployees);

router.get('/:id', getEmployeesByIdController.getEmployeesById);

router.get('/firstname/:first_name', getEmployeesByFirstNameController.getEmployeesByFirstName);

router.get('/salaries/salary', getEmployeesSalaryController.getEmployeesSalary);



module.exports = router;