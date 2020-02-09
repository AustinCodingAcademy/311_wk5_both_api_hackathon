const pool = require('../mysql/connection');
const mysql = require('mysql');

const getEmployees = ((req, res) => {
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})

const getEmployeesById = ((req, res) => {
  let sql = "SELECT * FROM employees WHERE emp_no = ?"
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [req.params.id])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})

const getEmployeesByFirstName = ((req, res) => {
  // res.send("getting employees..." )
  let sql = "SELECT * FROM employees WHERE first_name = ?"
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [req.params.first_name])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})


// Gets all employees (limit 50) by typing in a department, i.e. "Development" or "Finance"
const getEmployeesByDepartment = ((req, res) => {
  let sql = `
  SELECT first_name, last_name, dept_name 
  FROM employees 
  JOIN dept_emp ON employees.emp_no = dept_emp.emp_no 
  JOIN departments 
  ON dept_emp.dept_no = departments.dept_no 
  WHERE dept_name = ?
  LIMIT 50`;
  sql = mysql.format(sql, [req.params.department])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})


// Gets all the employees (limit 50 again) by typing in a job title, i.e. "Engineer" or "Staff"
const getEmployeesByJobTitle = ((req, res) => {
  let sql = `
  SELECT * 
  FROM employees 
  JOIN titles 
  ON employees.emp_no = titles.emp_no 
  WHERE title = ? 
  LIMIT 50`;
  sql = mysql.format(sql, [req.params.title])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})

module.exports = {
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName,
  getEmployeesByDepartment,
  getEmployeesByJobTitle
}