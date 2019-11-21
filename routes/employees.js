const express = require('express');
const router = express.Router();

const {
	getEmployees,
	getEmployeesById,
	getEmployeesByFirstName
} = require('../controllers/employees');

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeesById);
router.get('/employees/firstname/:first_name', getEmployeesByFirstName);

module.exports = router;

console.log('f');
