const express = require("express");
const router = express.Router();

// Grabbing the controller folder
const departmentsController = require("../controllers/departments");

//  Get all employees
router.get("/chicken/departments", departmentsController.getDepartments);

//  Get employees by ID
router.get("/chickenid/:id", departmentsController.getDepartmentsById);

//  Get employees by first name
router.get("/chicken/managers",departmentsController.getDepartmentManagers);


module.exports = router;