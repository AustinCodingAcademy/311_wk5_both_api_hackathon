const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

// show all the salaries but limit the results to 50
const getAllSalaries = (req, res) => {
	// set the sql query
	let sql = "SELECT * FROM employees JOIN salaries ON salaries.emp_no = employees.emp_no LIMIT 50";

	// run the query
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

// Get salaries of employees by first name
const getSalariesByFirstName = (req, res) => {
	// set sql statement
	let sql = "SELECT * FROM employees JOIN salaries ON salaries.emp_no = employees.emp_no WHERE ?? = ?";
	// set parameters for query
	const replacements = [
		"employees.first_name",
		req.params.first_name
	]

	// add the replacements to the query
	sql = mysql.format(sql, replacements)
	
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

const getSalaryByID = (req,res) => {
    // set the SQL statement
    let sql = "SELECT * from employees JOIN salaries ON salaries.emp_no=employees.emp_no WHERE employees.emp_no= ?"

    const replacements = [req.params.emp_no];

    sql=mysql.format(sql, replacements);

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    })
}

//export the functions we just set up
module.exports = { getAllSalaries, getSalariesByFirstName, getSalaryByID };