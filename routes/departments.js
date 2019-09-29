const express = require('express')
const router = express.Router()

//put controllers here
const allDepartments = require('../controllers/getDepartments')
const employeesByDepartmentsById = require("../controllers/getEmplByDeptsById")

//add routes here
router.get("/departments", allDepartments.getAllDepartments)

router.get("/departments/:id", employeesByDepartmentsById.getDeptsByEmplById)

module.exports = router