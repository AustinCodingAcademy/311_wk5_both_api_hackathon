const express = require("express");
const router = express.Router();
const usersController = require('../Controllers/employees');
//Get all the users
router.get('/', usersController.getEmployees);

// GET /users/:id
router.get('/employees/:id',usersController.getEmployeesById);

router.get('/employees/:first_name',usersController.getEmployeesByFirstName);

 module.exports = router;