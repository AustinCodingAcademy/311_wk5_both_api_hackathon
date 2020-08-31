const express = require('express')
const router = express.Router()
const departmentsController = require('../controllers/departments')

router.get('/', departmentsController.getDepartments)

router.get('deptno/:dept_no', departmentsController.getDepartmentsByNo)

router.post('/', departmentsController.createDepartment)

router.put('deptno/: dept_no', departmentsController.updateDepartment)

router.delete('deptno/: dept_no', departmentsController.deleteDepartment)

module.exports = router