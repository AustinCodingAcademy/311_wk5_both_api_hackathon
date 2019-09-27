const express = require('express')
const controller = require('../controllers/getEmployeesByFirstName')
const router = express.Router()

router.get('/firstname/:first_name', controller)

module.exports = router