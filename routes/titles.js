const express = require('express')
const router = express.Router()

const getTitles = require('../controllers/getAllTitles')
const getEmployeeTitles = require('../controllers/getTitlesByEmpID')

router.get('/titles', getTitles.getAllTitles)
router.get('/titles/employee/:id', getEmployeeTitles.titlesByEmpId)

module.exports = router;