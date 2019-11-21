const express = require('express');
const router = express.Router();
const {
	getEmployees,
	getEmployeesByFirstName,
	getEmployeesById
} = require('../controllers/employees');

router.get('/employees', getEmployees);
// router.get('/employees/:id', (req, res) => {
// 	res.send('getting employees...');
// });
router.get('/employees/firstname/:first_name', getEmployeesByFirstName);

module.exports = router;
