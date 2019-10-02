const express = require("express");
const router = express.Router();

const getEmployeesSalaries = require("../controllers/getEmployeesSalaries");
const getEmployeesSalariesById = require("../controllers/getEmployeesSalariesById");
const employeesSalariesFirstName = require("../controllers/getEmployeesSalariesFirstname");

router.get("/salaries", getEmployeesSalaries.getEmployeesSalaries);

router.get("/salaries/:id", getEmployeesSalariesById.getEmployeesSalariesById);

router.get("/salaries/firstname/:firstname", employeesSalariesFirstName.getEmployeesSalariesFirstName);

module.exports = router;