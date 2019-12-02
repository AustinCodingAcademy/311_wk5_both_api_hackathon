const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employees");

router.get("/", employeesController.getEmployees);

router.get(
  "/firstname/:first_name",
  employeesController.getEmployeesByFirstName
);

router.get("/:id", employeesController.getEmployeesById);


module.exports = router;