const express = require("express");
const router = express.Router();
const getEmployeesController = require("../controllers/getEmployees");
const getEmployeesByIdController = require("../controllers/getEmployeesById");
const getEmployeesByFirstNameController = require("../controllers/getEmployeesByFirstName");

router.get("/employees", getEmployeesController.getAllEmployees);
router.get("/employees/:id", getEmployeesByIdController.getEmployeesById);
module.exports = { getEmployeesByFirstName };
router.get("/employees/firstname/:first_name", getEmployeesByFirstNameController.);

module.exports = router;
