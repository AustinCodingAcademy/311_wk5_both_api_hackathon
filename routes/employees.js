var express = require('express')
var router = express.Router()
const employeesControllers = require ('../controllers/employees');
// const msql = require('/mysql')

router.get('/employees', employeesControllers.getEmployees)

router.get('/employees/:id', employeesControllers.getEmployeesById)

router.get('/employees/firstname/:first_name', employeesControllers.getEmployeesByFirstName)

// The two new routes I created for the new functions . . .
router.get('/employees/department/:department', employeesControllers.getEmployeesByDepartment)

router.get('/employees/titles/:title', employeesControllers.getEmployeesByJobTitle)





module.exports = router