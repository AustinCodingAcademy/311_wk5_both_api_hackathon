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
	//set sql query
	let sql = "SELECT * FROM employees WHERE first_name = req.params.first_name";
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

//export the functions we just set up
module.exports = { getAllEmployees, getEmployeesByFirstName };
