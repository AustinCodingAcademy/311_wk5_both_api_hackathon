const express = require("express");
const departmentsController = require("../controllers/departments");
const router = express.Router();

router.get("/", departmentsController.getDepartments);
router.get("/:emp_no", departmentsController.getDepartmentsByEmployeeId);

module.exports = router;
