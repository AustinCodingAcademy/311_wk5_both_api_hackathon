const express = require("express");
// setup our router
const router = express.Router();

// set access to the controller we'll use
const controller = require("../controllers/employees");
const controller = require("../controllers/getEmpolyeesByFirstName");

// get all comments
router.get("/employees", controller.getAllEmployees);

router.get("/employees/:first_name", controller.getEmployeesByFirstName);

// make the router available to the API
module.exports = router;
