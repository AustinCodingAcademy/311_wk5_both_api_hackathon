const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees')

router.get('/', employeesController.getEmployees);

router.get('/:id', employeesController.getEmployeesById);

router.get('/firstname/:first_name', (req, res) => {
  res.send('getting employees...')
});

module.exports = router;