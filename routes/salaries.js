const express = require('express')
const router = express.Router()
const salariesController = require('../controllers/salaries')

router.get('/', salariesController.getSalary)
router.get('/:emp_no', salariesController.getSalaryById)
router.get('/firstname/:first_name', salariesController.getSalaryByFirstName)

router.get('/', (req, res) => {
    res.send('getting employees...')
})

module.exports = router