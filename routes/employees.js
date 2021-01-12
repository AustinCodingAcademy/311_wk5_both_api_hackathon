const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employees.js");

router.get("/users", employeesController.getEmployees);

router.get("/users/:id", employeesController.getEmployeesById);

router.get(
  "/users/firstname/:first_name",
  employeesController.getEmployeesByFirstName
);

module.exports = router;
