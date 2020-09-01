const express = require('express')
const router = express.Router()
const createDepartmentsController = require('../controllers/departments/create')
const deleteDepartmentsController = require('../controllers/departments/delete')
const getAllDepartmentsController = require('../controllers/departments/getall')
const getByIdDepartmentsController = require('../controllers/departments/getbyid')
const updateDepartmentsController = require('../controllers/departments/update')

router.get('/', createDepartmentsController.getDepartments)

router.get('deptno/:dept_no', deleteDepartmentsController.getDepartmentsByNo)

router.post('/', getAllDepartmentsController.createDepartment)

router.put('deptno/:dept_no', getByIdDepartmentsController.updateDepartment)

router.delete('deptno/:dept_no', updateDepartmentsController.deleteDepartment)

module.exports = router