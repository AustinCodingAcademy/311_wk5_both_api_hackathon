const express = require("express");
// setup our router
const router = express.Router();

// set access to the controller we'll use
const controller = require("../controllers/employees");

// get all comments
router.get("/employees", controller.getAllEmployees);

router.get("/employees/:first_name", controller.getEmployeesByFirstName);
//josh
router.get("/employees/:emp_no", controller.getEmployeesByid);

// make the router available to the API
module.exports = router;
