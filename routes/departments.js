const express = require('express')
const router = express.Router()
const departmentsController = require('../controllers/departments')

router.get("/departments/:dept_name", departmentsController.getDepartmentsByName)
router.get("/departments/:from_date", departmentsController.getEmployeeByDeptAndYear)

module.exports = router