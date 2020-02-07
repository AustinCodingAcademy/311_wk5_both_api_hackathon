var express = require('express')
var router = express.Router()
const employeesControllers = require ('../controllers/employees');
// const msql = require('/mysql')

router.get('/employees', employeesControllers.getEmployees)

router.get('/employees/:id', employeesControllers.getEmployeesById)

router.get('/employees/firstname/:first_name', employeesControllers.getEmployeesByFirstName)





module.exports = router