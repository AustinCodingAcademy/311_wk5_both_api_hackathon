const express = require("express");
const router = express.Router();

// Grabbing the controller folder
const employeesController = require("../controllers/employees");

//  Get all employees
router.get("/", employeesController.getEmployees);

//  Get employees by ID
router.get("/:id", employeesController.getEmployeesById);

//  Get employees by first name
router.get(
  "/firstname/:first_name",
  employeesController.getEmployeesByFirstName
);
module.exports = router;