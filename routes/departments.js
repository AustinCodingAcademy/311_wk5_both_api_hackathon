const express = require('express');
const router = express.Router();

const departmentsController = require('../controllers/departments')

// get departments '/'
// get current department managers
// get get number of employees for each dept

router.get('/', departmentsController.getDepartments)
router.get('/managers', departmentsController.getDepartmentManagers)
router.get('/overview/:dept_name', departmentsController.getInfoByDeptName)
router.get('/employee-count', departmentsController.getDepartmentEmployeeCount)
module.exports = router;
