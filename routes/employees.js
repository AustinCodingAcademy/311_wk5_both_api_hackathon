const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employees");
const departmentController = require("../controllers/departments");
const salariesController = require('../controllers/salaries');
const titlesController = require('../controllers/titles')

router.get("/", employeesController.getEmployees);

router.get(
  "/firstname/:first_name",
  employeesController.getEmployeesByFirstName
);

router.get("/:id", 
employeesController.getEmployeesById
);

router.get(
  '/salaries/employees/:id',
  salariesController.getIdWithSalary
);

router.get(
  '/departments/employees/:id', 
departmentController.employeeWithDepartment
);

router.get
('/salaries/:empid', 
salariesController.getSalaryById
);

router.get('/titles',
 titlesController.allTitles
 );


module.exports = router;