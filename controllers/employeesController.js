const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getEmployees = (req, res) => {
  console.log('Test1')
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesById = (req, res) => {
  console.log('Test2')
  let sql = "SELECT * FROM employees WHERE emp_no = ?";
  sql = mysql.format(sql, [req.params.id])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    console.log(rows)
    return res.json(rows);
  })
}

const getEmployeesByFirstName = (req, res) => {
  console.log('Test3')
  let sql = "SELECT * FROM employees WHERE first_name = ? LIMIT 50";
  sql = mysql.format(sql, [req.params.first_name])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    console.log(req.params.first_name)
    return res.json(rows);
  })
}

const getEmployeesSalary = (req, res) => {
  console.log('Salary');
  pool.query("SELECT * FROM employees JOIN salaries ON employees.emp_no = salaries.emp_no LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesByIdSalary = (req, res) => {
  let sql = "SELECT * FROM employees JOIN salaries ON employees.emp_no = salaries.emp_no WHERE employees.emp_no = ?";
  sql = mysql.format(sql, [req.params.id])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    console.log(rows)
    return res.json(rows);
  })
}

const getEmployeesByFirstNameSalary = (req, res) => {
  let sql = "SELECT * FROM employees JOIN salaries ON employees.emp_no = salaries.emp_no WHERE first_name = ? LIMIT 50";
  sql = mysql.format(sql, [req.params.first_name])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    console.log(req.params.first_name)
    return res.json(rows);
  })
}


module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName, getEmployeesSalary, getEmployeesByIdSalary, getEmployeesByFirstNameSalary }