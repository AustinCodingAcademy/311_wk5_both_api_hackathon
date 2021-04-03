const express = require('express')
const router = express.Router();
const departmentsController = require('../controllers/departments.js')

router.get('/', departmentsController.getDepartments)
router.get('/:id', departmentsController.getDepartmentsById)

module.exports = router