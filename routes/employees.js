const express = require('express');
const router = express.Router();

const empCont = require('../controllers/getEmployees');
const empIdCont = require('../controllers/getEmployeesById');
const empNameCont = require('../controllers/getEmployeesByFirstName');

router.get('/employees', empCont.getEmployees);
router.get('/employees/:emp_no', empIdCont.getEmployeesById);
router.get('/employees/:first_name', empNameCont.getEmployeesByFirstName);

module.exports = router;