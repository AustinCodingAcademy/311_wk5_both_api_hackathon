const express = require('express')
const router = express.Router()
const deleteSalariesController = require('../controllers/salary/delete')
const getAllSalariesController = require('../controllers/salary/get-all')
const getByEmpNoSalariesController = require('../controllers/salary/get-by-empNo')
const updateSalariesController = require('../controllers/salary/update')



router.get('empno/:emp_no', getAllSalariesController.getSalariesByNo)

router.post('/', getByEmpNoSalariesController.createSalary)

router.put('empno/: emp_no', updateSalariesController.updateSalary)

router.delete('empno/: emp_no', deleteSalariesController.deleteSalary)





module.exports = router