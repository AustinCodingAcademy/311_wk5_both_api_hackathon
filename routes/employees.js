const express = require("express");
const router = express.Router();
const usersController = require("../Controllers/employees");
const usersControllerDepartments = require("../Controllers/departments");
const usersControllerSalary = require("../Controllers/emp_salary");
router.get("/", usersController.getEmployees);

router.get("/employees/:emp_no", usersController.getEmployeesById);

router.get( "/employees/firstname/:first_name",usersController.getEmployeesByFirstName);

router.get("/salaries/:emp_no", usersControllerSalary.getEmployeesCurrentSalary);


router.get("/departments/",usersControllerDepartments.getDept_name);

//router.get('/employees/:last_name',usersController.getEmployeesByLastName);

module.exports = router;
