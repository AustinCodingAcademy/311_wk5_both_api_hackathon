const express = require('express');
const router = express.Router();

const getEmployeesController = require('../controllers/getEmployees');
const getEmployeesByIdController = require('../controllers/getEmployeesById');
const getEmployeesByFirstNameController = require('../controllers/getEmployeesByFirstName');
const getEmployeesSalaryController = require('../controllers/getEmployeesSalary');
const getDepartmentsController = require('../controllers/getDepartments');



router.get('/', getEmployeesController.getEmployees);

router.get('/:id', getEmployeesByIdController.getEmployeesById);

router.get('/firstname/:first_name', getEmployeesByFirstNameController.getEmployeesByFirstName);

router.get('/salaries/salary', getEmployeesSalaryController.getEmployeesSalary);

router.get('/departments/deps', getDepartmentsController.getDepartments);


module.exports = router;