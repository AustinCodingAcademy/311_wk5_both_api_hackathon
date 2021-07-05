const express = require('express')
const router = express.Router()

const departmentsByIdController = require('../controllers/getDepartmentById')
const departmentsByNameController = require('../controllers/getDepartmentByName')

router.get('/departments/:dept_no', departmentsByIdController.getDepartmentById)

router.get('/deptName/:dept_name', departmentsByNameController.getDepartmentByName)

module.exports = router;
