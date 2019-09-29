const express = require('express')
const router = express.Router()

//put controllers here
const allDepartments = require('../controllers/getDepartments')
const departmentsByEmployeeId = require("../controllers/getDeptsByEmplById")

//add routes here
router.get("/departments", allDepartments.getAllDepartments)

router.get("/departments/employees/:id", departmentsByEmployeeId.getDeptsByEmplById)

module.exports = router