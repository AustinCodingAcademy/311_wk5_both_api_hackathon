const express = require('express')
const router = express.Router()

const salariesController = require('../controllers/getSalariesByEmpNo')


router.get('/salary/:id', salariesController.getSalariesById)

module.exports = router;