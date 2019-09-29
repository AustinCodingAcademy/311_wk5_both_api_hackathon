const express = require('express')
const router = express.Router()

const getTitles = require('../controllers/getAllTitles')

router.get('/titles', getTitles.getAllTitles)

module.exports = router;