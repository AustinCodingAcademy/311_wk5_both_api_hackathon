const express = require('express');
const router = express.Router();

const departmentsController = require('../controllers/departments')


// Get all users by department
router.get('/', departmentsController.getDept)

// // Get users by department number
router.get('/:name', departmentsController.getEmployeesByDepartmentName)

// // Get salaries by first name
// router.get('/salaries/:name', departmentsController.getSalariesByDepartment)


module.exports = router;