const express = require('express')
const router = express.Router()
const salariesController = require('../controllers/salary/delete.js')
const salariesController = require('../controllers/salary/get-all.js')
const salariesController = require('../controllers/salary/get-by-empNo.js')
const salariesController = require('../controllers/salary/update.js')

router.get('/', salariesController.getSalaries)

router.get('empno/:emp_no', salariesController.getSalariesByNo)

router.post('/', salariesController.createSalary)

router.put('empno/: emp_no', salariesController.updateSalary)

router.delete('empno/: emp_no', salariesController.deleteSalary)





module.exports = router