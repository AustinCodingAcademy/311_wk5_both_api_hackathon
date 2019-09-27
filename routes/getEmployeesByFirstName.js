const express = require('express')
const controller = require('../controllers/getEmployeesByFirstName')
const router = express.Router()

router.get('/employees/:first_name', controller)

module.exports = router;