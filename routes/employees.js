const express = require('express');
const empCont = require('../controllers/getEmployees');
const empIdCont = require('../controllers/getEmployeesById');
const empNameCont = require('../controllers/getEmployeesByFirstName');
const router = express.Router();

router.get('/', empCont.getEmployees);
router.get('/:emp_no', empIdCont.getEmployeesById);
router.get('/firstname/:first_name', empNameCont.getEmployeesByFirstName);

module.exports = router;