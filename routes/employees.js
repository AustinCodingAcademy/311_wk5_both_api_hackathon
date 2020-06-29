const express = require("express");
const employeesController = require("../controllers/employees");
const titlesController = require("../controllers/titles")
const { getTitles } = require("../controllers/titles");
const router = express.Router();

router.get("/", employeesController.getAllEmployees);
router.get("/:emp_no", employeesController.getEmployeeById);
router.get("/:first_name", employeesController.getEmployeesByFirstName);
router.get("/", titlesController.getTitles)

module.exports = router;
