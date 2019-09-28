const express = require("express");
const router = express.Router();

const getEmployeesSalaries = require("../controllers/getEmployeesSalaries");
const getEmployeesSalariesById = require("../controllers/getEmployeesSalariesById");
const getEmployeesSalariesFirstName = require("../controllers/getemployeesSalariesFirstName");

router.get("/salaries", getEmployeesSalaries.getEmployeesSalaries);

router.get("/salaries/:id", getEmployeesSalariesById.getEmployeesSalariesById);

router.get(
  "/salaries/firstname/:first_name",
  getEmployeesSalariesFirstName.getEmployeesSalariesFirstName
);

module.exports = router;
