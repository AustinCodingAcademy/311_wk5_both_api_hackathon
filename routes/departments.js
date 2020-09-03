const express = require('express')
const router = express.Router()

const createDepartmentsController = require('../controllers/departments/create')
const deleteDepartmentsController = require('../controllers/departments/delete')
const getAllDepartmentsController = require('../controllers/departments/getAll')
const getByIdDepartmentsController = require('../controllers/departments/getById')
const updateDepartmentsController = require('../controllers/departments/update')

router.get('/', getAllDepartmentsController.getDepartments)

router.get('deptno/:dept_no', getByIdDepartmentsController.getDepartmentsByNo)

router.post('/', createDepartmentsController.createDepartment)

router.put('deptno/:dept_no', updateDepartmentsController.updateDepartment)

router.delete('deptno/:dept_no', deleteDepartmentsController.deleteDepartment)

module.exports = router