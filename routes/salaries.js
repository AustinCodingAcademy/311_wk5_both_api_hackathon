const express = require("express");
const router = express.Router();

const getEmployeesSalaries = require("../controllers/getEmployeesSalaries");
const getEmployeesSalariesById = require("../controllers/getEmployeesSalariesById");
const getEmployeesSalariesFirstName = require("../controllers/getEmployeesSalariesFirstname");

router.get("/salaries", getEmployeesSalaries.getEmployeesSalaries);

router.get("/salaries/:id", getEmployeesSalaries.getEmployeesSalaries);

router.get("/salaries/:firstname", getEmployeesSalariesFirstName.getEmployeesSalariesFirstName);

module.exports = router;
