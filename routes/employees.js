const express = require("express");
const router = express.Router();
const usersController = require("../Controllers/employees");
//Get all the users
router.get("/", usersController.getEmployees);

// GET /users/:id
router.get("/employees/:emp_no", usersController.getEmployeesById);

router.get(
  "/employees/firstname/:first_name",
  usersController.getEmployeesByFirstName
);

module.exports = router;
