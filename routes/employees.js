const express = require("express");
const router = express.Router();
const usersController = require('../Controllers/employees');

router.get('/', usersController.getEmployees);


router.get('/employees/:emp_no',usersController.getEmployeesById);

router.get('/employees/firstname/:first_name',usersController.getEmployeesByFirstName);

 module.exports = router;