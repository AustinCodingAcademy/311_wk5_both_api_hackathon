const express = require('express')
const router = express.Router()
const getEmployeesByFirstNameController = require('../controllers/getEmployeesByFirstName')
const getEmployeesByIdController = require('../controllers/getEmployeesById')

router.get('/', (req,res) => {
  res.send('getting employees')
})

router.get('/:id', getEmployeesByIdController.getEmployeesById)

router.get('/firstname/:first_name', getEmployeesByFirstNameController.getEmployeesByFirstName)

module.exports = router