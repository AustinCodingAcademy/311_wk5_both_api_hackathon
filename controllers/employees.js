const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

//getEmployees
exports.getEmployees = function getEmployees(req, res) {
	pool.query('SELECT * FROM employees limit 50', (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

//getEmployeesById
exports.getEmployeesById = function getEmployeesById(req, res) {
	let sql = 'SELECT * FROM employees WHERE emp_no = ?';
	sql = mysql.format(sql, [req.params.id]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

//getEmployeesByFirstName
exports.getEmployeesByFirstName = function getEmployeesByFirstName(req, res) {
	let sql = 'SELECT * FROM employees where first_name = ?';

	sql = mysql.format(sql, [req.params.first_name]);
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});

	// res.send('firstname');
};
