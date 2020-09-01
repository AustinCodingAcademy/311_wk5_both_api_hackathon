const express = require('express')
const router = express.Router()
const deleteSalariesController = require('../controllers/salary/delete.js')
const getAllSalariesController = require('../controllers/salary/get-all.js')
const getByEmpNoSalariesController = require('../controllers/salary/get-by-empNo.js')
const updateSalariesController = require('../controllers/salary/update.js')



router.get('empno/:emp_no', getAllSalariesController.getSalariesByNo)

router.post('/', getByEmpNoSalariesController.createSalary)

router.put('empno/: emp_no', updateSalariesController.updateSalary)

router.delete('empno/: emp_no', deleteSalariesController.deleteSalary)





module.exports = router