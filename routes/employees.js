const express = require('express');
const router = express.Router();
const controller = require('../controllers/employees');

router.get('/', controller.getEmployees);

router.get('/:id', controller.getEmployeeByID);

router.get('/firstname/:first_name', controller.getEmployeeByFirstName);


module.exports = router;