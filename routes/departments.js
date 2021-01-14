const express = require('express')
const router = express.Router()
const departmentsController = require('../controllers/departments')

router.get("/departments/:dept_name", departmentsController.getDepartmentsByName)

module.exports = router