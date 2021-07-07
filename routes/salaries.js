const express = require("express");
const salariesController = require("../controllers/salaries");
const router = express.Router();

router.get("/", salariesController.getEmployeesBySalaries);
router.get("/:emp_no", salariesController.getSalaryByEmployeeId);

module.exports = router;
