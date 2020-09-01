const express = require('express')
const router = express.Router()
const titlesController = require('../controllers/titles')

router.get('/', titlesController.getTitles)

router.get('empno/:emp_no', titlesController.getTitlesByNo)

router.post('/', titlesController.createTitle)

router.put('empno/: emp_no', titlesController.updateTitle)

router.delete('empno/: emp_no', titlesController.deleteTitle)





module.exports = router