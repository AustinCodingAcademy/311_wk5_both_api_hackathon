const express = require('express')
const router = express.Router()
const createDepartmentsController = require('../controllers/departments/create.js')
const deleteDepartmentsController = require('../controllers/departments/delete.js')
const getAllDepartmentsController = require('../controllers/departments/getall.js')
const getByIdDepartmentsController = require('../controllers/departments/getbyid.js')
const putDepartmentsController = require('../controllers/departments/put.js')

router.get('/', createDepartmentsController.getDepartments)

router.get('deptno/:dept_no', deleteDepartmentsController.getDepartmentsByNo)

router.post('/', getAllDepartmentsController.createDepartment)

router.put('deptno/: dept_no', getByIdDepartmentsController.updateDepartment)

router.delete('deptno/: dept_no', putDepartmentsController.deleteDepartment)

module.exports = router