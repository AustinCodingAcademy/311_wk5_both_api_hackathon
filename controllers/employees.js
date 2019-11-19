const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

//getEmployees
exports.getEmployees = function getEmployees(req, res) {
	pool.query('SELECT * FROM employees limit 100', (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
	// res.send('hey hey');
};

//getEmployeesById
exports.getEmployeesById = function getEmployeesById(req, res) {
	res.send('getting employees...');
};

//getEmployeesByFirstName
exports.getEmployeesByFirstName = function getEmployeesByFirstName(req, res) {
	pool.query('SELECT * FROM users where first_name = ?', (err, rows) => {
		sql = mysql.format(sql, req.body.first_name);

		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};
