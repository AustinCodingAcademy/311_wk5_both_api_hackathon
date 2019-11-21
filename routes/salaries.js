const express = require('express');
const router = express.Router();
const salariesController = require('../controllers/salaries');

router.get('/50', salariesController.getSalaries);

router.get('/bigmoney', salariesController.getTopSalaries);

router.get('/:id', salariesController.getSalariesById);

module.exports = router;