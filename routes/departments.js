const express = require("express");
const router = express.Router();
const departmentsController = require("../controllers/departments.js");

router.get("/departments", departmentsController.getDepartments);

router.get("/departments/:dept_no", departmentsController.getDepartmentsById);

router.get(
  "/departments/name/:dept_name",
  departmentsController.getDepartmentsByName
);

module.exports = router;
