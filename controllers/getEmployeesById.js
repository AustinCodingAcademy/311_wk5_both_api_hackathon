// const express = require('express');
// const ruter = express.Router();

// const employees = require('../employees.js')

// router.get('/employees/:id')

modeule.export = { getEmployeesById };

const getEmployeeById = (req, res) => {
	//SELCT USERS WHERE IS = <REQ PARAMS ID>
	let sql = "QUERY GOES HERE";
	//WHAT GOES IN THE BRACKETS
	sql = mysql.format(sql, []);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};
