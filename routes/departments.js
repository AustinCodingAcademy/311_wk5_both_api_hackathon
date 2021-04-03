const express = require('express')
const router = express.Router()
const controller = require('../controllers/departments')
 
router.get('/employees/:id', controller.getDeptEmpById)

router.get('/', controller.getDept)

module.exports = router