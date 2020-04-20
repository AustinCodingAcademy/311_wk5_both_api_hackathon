const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

// show all the salaries but limit the results to 50
const getAllSalaries = (req, res) => {
	// set the sql query
	let sql =
		"SELECT * FROM employees JOIN salaries ON salaries.emp_no = employees.emp_no LIMIT 50";

	// run the query
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

// Get salaries of employees by first name
const getSalariesByFirstName = (req, res) => {
	// set sql statement
	let sql =
		"SELECT * FROM employees JOIN salaries ON salaries.emp_no = employees.emp_no WHERE ?? = ?";
	// set parameters for query
	const replacements = ["employees.first_name", req.params.first_name];

	// add the replacements to the query
	sql = mysql.format(sql, replacements);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

// Get salaries of employees above a certain pay (num)
const getSalariesAbove = (req, res) => {
	// set sql statement
	let sql = `Select * from salaries join employees on 
	employees.emp_no = salaries.emp_no where salary >= ? LIMIT 1000`;
	// set parameters for query
	const replacements = [req.params.num];

	// add the replacements to the query
	sql = mysql.format(sql, replacements);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

// get salaries that fit criteria
const getSalariesCalc = (req, res) => {
	// get the calulation in string form
	let reqString = req.params.calc;
	// initialize the variable for our query
	let sql;

	// check the possible values
	switch (reqString) {
		// if it's min return just 1 record (smallest)
		case "min":
			{
				sql = "Select * from salaries order by salary asc limit 1";
			}
			break;
		// if it's max just return 1 recod (largest)
		case "max":
			{
				sql = "Select * from salaries order by salary desc limit 1";
			}
			break;
		default: {
			// if it's some crazy calculation, then we replace all the
			// _ characters with spaces and then use it in the query
			let calcStr = reqString.replace(/_/g, " ");
			sql = `SELECT * from salaries where ${calcStr} LIMIT 1000`;
		}
	}

	// call dat query!
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

const getSalaryMinMax = (req, res) => {
	// set the SQL statement
	let sql =
		"SELECT dept_name, first_name, last_name, salary  from employees JOIN salaries ON salaries.emp_no=employees.emp_no JOIN dept_emp ON dept_emp.emp_no= salaries.emp_no JOIN departments ON departments.dept_no=dept_emp.dept_no WHERE salary IN ((SELECT MAX(salary)from salaries), (SELECT MIN(salary) from salaries))";

	sql = mysql.format(sql);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

const getSalaryDeptMinMax = (req, res) => {
	// set the SQL statement
	let sql =
		"SELECT dept_name, MAX(salary), MIN(salary) FROM departments JOIN dept_emp ON dept_emp.dept_no=departments.dept_no JOIN salaries ON salaries.emp_no=dept_emp.emp_no JOIN employees ON employees.emp_no=salaries.emp_no group by dept_name";

	sql = mysql.format(sql);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

const getSalaryByID = (req, res) => {
	// set the SQL statement
	let sql =
		"SELECT * from employees JOIN salaries ON salaries.emp_no=employees.emp_no WHERE employees.emp_no= ?";

	const replacements = [req.params.emp_no];

	sql = mysql.format(sql, replacements);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

//export the functions we just set up
module.exports = {
	getAllSalaries,
	getSalariesByFirstName,
	getSalaryByID,
	getSalariesAbove,
	getSalariesCalc,
	getSalaryMinMax,
	getSalaryDeptMinMax
};
