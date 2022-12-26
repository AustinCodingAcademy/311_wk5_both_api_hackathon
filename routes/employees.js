const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employees')

router.get('/', employeesController.getEmployees)
router.get('/:emp_no', employeesController.getEmployeesById)
router.get('/firstname/:first_name', employeesController.getEmployeesByFirstName)

router.get('/', (req, res) => {
    res.send('getting employees...')
})

module.exports = router