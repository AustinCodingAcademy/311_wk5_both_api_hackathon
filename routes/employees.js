const express = require("express");
const bodyParser = require("body-parser");
const employeeController = require("../controllers/employees")
// const salaryController = require("../controllers/salaries")



const router = express.Router()

//const employeesController = require("../controllers/employees")

router.use(bodyParser.json())


router.get("/salaries", employeeController.getSalaries)

router.get("/salaries/:emp_no", employeeController.getSalariesById)

router.get("/salaries/fromdate/:from_date", employeeController.getSalariesByFromDate)

router.get("/department/:dept_no", employeeController.getDeptById)

router.get("/:emp_no", employeeController.getEmployeesById)

router.get("/firstname/:first_name", employeeController.getEmployeesByFirstName)

router.get("/", employeeController.getEmployees)


module.exports = router