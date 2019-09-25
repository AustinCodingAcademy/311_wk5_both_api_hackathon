const express = require("express");
const router = express.Router();
const usersController = require('../controllers/employees');
//Get all the users
router.get('/', usersController.getEmployees);

// GET /users/:id
router.get('/employees/:id',usersController.getEmployeesById);

router.get('/employees/:first_name',usersController.getEmployeesByFristName);

 module.exports = router;