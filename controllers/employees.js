const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

// show all the employees but limit the results to 50
const getAllEmployees = (req, res) => {
	// set the sql query
	let sql = "SELECT * FROM employees LIMIT 50";

	// run the query
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

// Get employees by first name
const getEmployeesByFirstName = (req, res) => {
	// set sql statement
	let sql = "SELECT * FROM ?? WHERE ?? = ?";
	// set parameters for query
	const replacements = [
		"employees",
		"first_name",
		req.params.first_name
	]

	// add the replacements to the query
	sql = mysql.format(sql, replacements)
	
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};
//Get employees by id
const getEmployeesByid = (req, res) => {
	// set sql statement
	let sql = "SELECT * FROM ?? WHERE ?? = ?";
	// set parameters for query
	const replacements = [
		"employees",
		"emp_no",
		req.params.emp_no
	]

	// add the replacements to the query
	sql = mysql.format(sql, replacements)
	
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

//export the functions we just set up
module.exports = { getAllEmployees, getEmployeesByFirstName, getEmployeesByid  };
