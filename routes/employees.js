const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employees.js");

router.get("/employees", employeesController.getEmployees);

router.get("/employees/:id", employeesController.getEmployeesById);

router.get(
  "/employees/firstname/:first_name",
  employeesController.getEmployeesByFirstName
);

module.exports = router;
