//routers/routerEmployees.js
const express = require('express');
const controllerEmployees = require('../controllers/controllerEmployees');
const router = express.Router();

router.get('/', controllerEmployees.getAllEmployees);
router.get('/:id', controllerEmployees.getEmployeeById);
router.get('/firstName/:first_name', controllerEmployees.getEmployeeByFirstName);

module.exports = router