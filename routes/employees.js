const express = require('express');
const router = express.Router();
const controller = require('../controllers/employees');

router.get('/', controller.getEmployees);

router.get('/:id', controller.getEmployeeByID);

router.get('/firstname/:first_name', (req, res) => {
  let name = req.params.first_name;
  res.send(`Getting employees by first name: ${name}`);
});


module.exports = router;