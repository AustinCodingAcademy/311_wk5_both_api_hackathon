const express = require('express')
const router = express.Router()
const getEmployeesByFirstNameController = require('../controllers/getEmployeesByFirstName')

router.get('/', (req,res) => {
  res.send('getting employees')
})

router.get('/:id', (req,res) => {
  res.send('getting employees')
})

router.get('/firstname/:first_name', getEmployeesByFirstNameController.getEmployeesByFirstName)

module.exports = router