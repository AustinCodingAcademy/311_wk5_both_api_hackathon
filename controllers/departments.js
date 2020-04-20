const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

// show list of all departments
const getAllDepartments = (req, res) => {
	// set the sql query
	let sql = "SELECT * FROM departments";

	if (req.query.include && req.query.include.indexOf("manager") > -1) {
		sql =
			"Select * From dept_manager JOIN departments ON dept_manager.dept_no = departments.dept_no JOIN employees ON employees.emp_no LIKE concat ('%',dept_manager.emp_no)";
	}

	// run the query
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

// /departments/:deptNo?include=manager
// Return a department by number, include its manager
// show list of all departments
const getAllDepartmentsID = (req, res) => {
	// set the sql query
	let sql = `SELECT * FROM departments WHERE departments.dept_no = '${req.params.dept_no}'`;

	if (req.query.include && req.query.include.indexOf("manager") > -1) {
		sql = `Select * From dept_manager
    JOIN departments ON dept_manager.dept_no = departments.dept_no
    JOIN employees ON employees.emp_no LIKE concat ('%',dept_manager.emp_no) WHERE departments.dept_no = '${req.params.dept_no}'`;
	}

	// run the query
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

// show list of all employees in a department by department name
const getEmployeesByDepartment = (req, res) => {
	// set sql statement
	let sql =
		"SELECT first_name, last_name, dept_name FROM employees JOIN dept_emp ON employees.emp_no = dept_emp.emp_no JOIN departments ON dept_emp.dept_no = departments.dept_no WHERE ?? = ?";

	// set parameters for query
	const replacements = ["dept_name", req.params.dept_name];

	// add the replacements to the query
	sql = mysql.format(sql, replacements);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

// show the empolyee assigned department by employee number
const getDepartmentsByEmpolyeeID = (req, res) => {
	// set the SQL statement
	let sql =
		"SELECT first_name, last_name, dept_name FROM employees JOIN dept_emp ON employees.emp_no = dept_emp.emp_no JOIN departments ON dept_emp.dept_no = departments.dept_no WHERE ?? = ?";

	const replacements = ["employees.emp_no", req.params.emp_no];

	sql = mysql.format(sql, replacements);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

//export the functions we just set up
module.exports = {
	getAllDepartments,
	getEmployeesByDepartment,
	getDepartmentsByEmpolyeeID,
	getAllDepartmentsID
};
