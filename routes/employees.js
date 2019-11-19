const express = require('express');
const router = express.Router();
const { getEmployees } = require('../controllers/employees');

router.get('/employees', getEmployees);
router.get('/employees/:id', (req, res) => {
	res.send('getting employees...');
});
router.get('/employees/firstame/:first_name', (req, res) => {
	res.send('getting employees...');
});

module.exports = router;
