const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees')

router.get('/', employeesController.getEmployees);

router.get('/:id', (res, req) => {
  res.send('getting employees...')
});

router.get('/firstname/:first_name', (res, req) => {
  res.send('getting employees...')
});

module.exports = router;