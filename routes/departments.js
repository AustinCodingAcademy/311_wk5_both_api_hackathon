const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/departments");

router.get("/", departmentController.getDepartments);

router.get("/employees", departmentController.employeesPerDepartment);

router.get('/managers', departmentController.getDepartmentManagers);

module.exports = router;
