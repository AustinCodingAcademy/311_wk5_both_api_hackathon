const express = require('express')
const router = express.Router()

const deleteTitlesController = require('../controllers/titles/delete')
const getAllTitlesController = require('../controllers/titles/getAll')
const getByEmpNoTitlesController = require('../controllers/titles/getById')
const updateTitlesController = require('../controllers/titles/update')
const createTitlesController = require('../controllers/titles/create')

router.get('/', getAllTitlesController.getTitles)

router.get('/:emp_no', getByEmpNoTitlesController.getTitlesByNo)

router.post('/:emp_no', createTitlesController.createTitle)

router.put('/:emp_no', updateTitlesController.updateTitle)

router.delete('/:emp_no', deleteTitlesController.deleteTitle)

module.exports = router