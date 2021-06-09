const express = require('express');
const departmentRouter = express.Router();
const departmentController = require('../controllers/departments.js')

departmentRouter.get('/departments/', departmentController.getAllDepartments);

departmentRouter.get('/departments/id/:id', departmentController.getEmployeeDepartment);

module.exports = departmentRouter;