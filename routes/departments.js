const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/departments");

router.get("/departments", departmentController.getDepartments);

router.get("/department/employees", departmentController.employeesPerDepartment);

router.get('/managers', departmentController.getDepartmentManagers);

module.exports = router;
