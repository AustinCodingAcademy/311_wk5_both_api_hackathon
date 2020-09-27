const express = require('express');
const employeesController = require('../controllers/employeesController'); //Needs  to be created
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();


router.get('/', employeesController.getAll);

router.get('/:id', employeesController.getById);

router.get('/:first_name', employeesController.getByFirstName);

module.exports = router;;