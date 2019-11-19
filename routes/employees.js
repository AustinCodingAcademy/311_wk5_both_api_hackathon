const express = require("express");
const bodyParser = require("body-parser");
const employeeController = require("../controllers/employees")

const router = express.Router()

//const employeesController = require("../controllers/employees")

router.use(bodyParser.json())

router.get("/", employeeController.getEmployees)

router.get("/:id", employeeController.getEmployeesById)

router.get("/firstname/:first_name", employeeController.getEmployeesByFirstName)

module.exports = router