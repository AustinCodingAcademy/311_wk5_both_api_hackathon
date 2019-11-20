const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

//getEmployees
exports.getEmployees = function getEmployees(req, res) {
	pool.query('SELECT * FROM employees limit 100', (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

//getEmployeesById
exports.getEmployeesById = function getEmployeesById(req, res) {
  let sql = 'SELECT * FROM employees WHERE emp_no = ?';
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql , (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  })
};

//getEmployeesByFirstName
exports.getEmployeesByFirstName = function getEmployeesByFirstName(req, res) {
	pool.query('SELECT * FROM users where first_name = ?', (err, rows) => {
		sql = mysql.format(sql, req.body.first_name);

		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};
