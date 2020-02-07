const express = require('express')
const router = express.Router()

const departmentsByIdController = require('../controllers/getDepartmentById')
const departmentsByNameController = require('../controllers/getDepartmentByName')

router.get('/:id', departmentsByIdController.getDepartmentById)

router.get('firstname/:first_name', departmentsByNameController.getDepartmentByName)

module.exports = router;
