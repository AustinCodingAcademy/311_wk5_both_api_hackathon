const express = require('express')
const router = express.Router()
const controller = require('../controllers/getEmployees')

router.get('/', controller.getEmployees)
router.get('/:id', controller.getEmployeesById)
router.get('/firstname/:first_name', controller.getEmployeesByFirstName)

module.exports = router;