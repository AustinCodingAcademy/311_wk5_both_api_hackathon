const express = require("express");
const router = express.Router();
const usersController = require('../Controllers/em-information');

router.get('/em-information/:salaries/employees/:id', usersController.getCurrentSalaries);


router.get('/em-information/:departments/employees/:id',usersController.getdepartments);

router.get('/em-information/:last_name',usersController.getEmployeesByLastName);

 module.exports = router;