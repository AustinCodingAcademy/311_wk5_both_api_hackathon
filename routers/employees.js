const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employees')

router.get("/employees", employeesController.getEmployees)
// router.get("/employees/:id", employeesController.getEmployeesById)
router.get("firstname/:first_name", employeesController.getEmployeesByFirstName)

module.exports = router