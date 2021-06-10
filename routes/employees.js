const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employees');

router.get('/employees', employeeController.list);

router.get('/employees/:id', employeeController.show);

router.get('/employees/firstname/:first_name', employeeController.create);

module.exports = router;