const express = require('express');
const router = express.Router();

const getEmployeesController = require('../controllers/getEmployees');
const getEmployeesByIdController = require('../controllers/getEmployeesById');
const getEmployeesByFirstNameController = require('../controllers/getEmployeesByFirstName');



router.get('/', getEmployeesController.getEmployees);

router.get('/:id', getEmployeesByIdController.getEmployeesById);

router.get('/firstname/:first_name', getEmployeesByFirstNameController.getEmployeesByFirstName);


module.exports = router;