const express = require('express')
const router = express.Router()
const getSalariesByIdController = require('../controllers/salariesById')
const getSingleSalaryByIdController = require('../controllers/singleSalaryById')



router.get('/employees/:id', getSalariesByIdController.salariesById)

router.get('/:id', getSingleSalaryByIdController.singleSalaryById)

module.exports = router