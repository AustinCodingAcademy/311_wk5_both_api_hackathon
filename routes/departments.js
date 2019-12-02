const express = require('express');
const router = express.Router();
const departmentsController = require('../controllers/departments')

router.get('/', departmentsController.getDepartments);
router.get('/managers', departmentsController.getDepartmentManagers);
router.get('/employee-count', departmentsController.getDepartmentEmployeeCount);

module.exports = router;
