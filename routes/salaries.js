const express = require("express");
// setup our router
const router = express.Router();

// set access to the controller we'll use
const controller = require("../controllers/salaries");

// get all comments
router.get("/salaries", controller.getAllSalaries);

router.get("/salaries/:first_name", controller.getSalariesByFirstName);

router.get("/salaries/:emp_no", controller.getSalaryByID);

// make the router available to the API
module.exports = router;