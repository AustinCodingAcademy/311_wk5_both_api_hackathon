const express = require("express");
const router = express.Router();

const getSalariesController = require("../controllers/getEmployeesSalaries");
const getSalariesByIdController = require("../controllers/getEmployeesSalariesById");
const getSalariesByFirstNameController = require("../controllers/getSalariesByFirstName");

router.get("/salaries", getSalariesController.getAllSalaries);

router.get("/salaries/:id", getSalariesByIdController.getSalariesById);

router.get(
  "/salaries/firstname/:first_name",
  getSalariesByFirstNameController.getSalariesByFirstName
);

module.exports = router;
