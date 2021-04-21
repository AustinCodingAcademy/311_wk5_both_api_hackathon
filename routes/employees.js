const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employees");

router.get("/", employeesController.getEmployees);

//router.get('/employees/:emp_no', employeesController.getEmployeesById);

// router.get('/first_name/:first_name', employeesController.getEmployeesByFirstName);
// router.get('/salaries', employeesController.getEmployeesSalary);

// router.get('/departments', employeesController.getEmployeesDepartment);

// router.get('/salaries/:emp_no', employeesController.getOneSalaryById);

module.exports = router;
