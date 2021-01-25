const express = require("express");
const router = express.Router();
const salariesController = require("../controllers/salaries.js");

router.get("/salaries", salariesController.getSalaries);

router.get("/salaries/:id", salariesController.getSalaryHistory);

router.get("/salaries/current/:id", salariesController.getCurrentSalary);

router.get("/salaries/name/:id", salariesController.getSalaryWithName);

module.exports = router;
