// BEFORE

// const express = require('express')
// const employeesController = require('../controllers/employees')
// const router = express.Router()


// router.get('/', employeesController.getEmployees)
// router.get('/:first_name', employeesController.getEmployeesByFirstName)
// router.get('/:id', employeesController.getEmployeesById)


// module.exports = router



// AFTER 

const express = require('express')

const getEmployeesController = require('../controllers/getEmployees')
const getEmployeesByFirstNameController = require('../controllers/getEmployeesByFirstName')
const getEmployeesByIdController = require('../controllers/getEmployeesById')

const router = express.Router()


router.get('/', getEmployeesController.getEmployees)
router.get('/:id', getEmployeesByIdController.getEmployeesById)
router.get('/:first_name', getEmployeesByFirstNameController.getEmployeesByFirstName)


module.exports = router