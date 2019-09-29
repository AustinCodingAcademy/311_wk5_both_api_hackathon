const express = require("express");
const router = express.Router();

const getEmployeesSalaries = require("../controllers/getEmployeesSalaries");
const getEmployeesSalariesById = require("../controllers/getEmployeesSalariesById");
const employeesSalariesFirstName = require("../controllers/getEmployeesByFirstName");

router.get("/salaries", getEmployeesSalaries.getEmployeesSalaries);

router.get("/salaries/:id", getEmployeesSalariesById.getEmployeesSalariesById);

//router.get("/salaries/:firstname", employeesSalariesFirstName.getEmployeesSalariesById);

module.exports = router;