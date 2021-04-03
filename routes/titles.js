const express = require('express')
const router = express.Router();
const titlesController = require('../controllers/titles.js')

router.get('/', titlesController.getTitles)
router.get('/:id' , titlesController.getTitlesbyId)


module.exports = router