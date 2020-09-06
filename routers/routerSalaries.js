//routers/routerSalaries.js
const express = require('express');
const controllerSalaries = require('../controllers/controllerSalaries');
const router = express.Router();

router.get('/', controllerSalaries.getAllSalaries);
router.get('/:id', controllerSalaries.getSalarieById);
router.get('/firstName/:first_name', controllerSalaries.getSalarieByFirstName);

module.exports = router