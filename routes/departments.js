const express = require('express');
const router = express.Router();
const departmentsController = require('../controllers/departments')

// get departments '/'
router.get('/', departmentsController.getDepartments)

// get current department managers
router.get('/managers', departmentsController.getDepartmentManagers)

// get dept name, dept manager full name, number of employees by dept_name
router.get('/overview/:dept_name', departmentsController.getInfoByDeptName)

// get number of employees for each dept
router.get('/employee-count', departmentsController.getDepartmentEmployeeCount)

module.exports = router;
