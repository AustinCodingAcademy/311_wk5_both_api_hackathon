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

I'm sick af
console.log('i');

I'm sick af
console.log('4');

I'm sick af