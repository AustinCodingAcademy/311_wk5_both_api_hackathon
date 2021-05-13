const express = require('express');
const router = express.Router();
const departmentsController = require('../controllers/departments');

router.get('/departments', departmentsController.getDepartments);

router.get('/departments/:dept_no', departmentsController.getDepartmentsByNo);

router.get('/departments/managers/:dept_no', departmentsController.getManagersByDeptNo);

router.get('/departments/employees/:dept_no', departmentsController.getEmployeesByDeptNo);

module.exports = router;