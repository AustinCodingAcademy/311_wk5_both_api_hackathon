const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesById = (req, res) => {
  let sql = "SELECT * FROM employees WHERE emp_no = ?";
  sql = mysql.format(sql, [req.params.id])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    console.log(rows)
    return res.json(rows);
  })
}

const getEmployeesByFirstName = (req, res) => {
  let sql = "SELECT * FROM employees WHERE first_name = ? LIMIT 50";
  sql = mysql.format(sql, [req.params.first_name])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    console.log(req.params.first_name)
    return res.json(rows);
  })
}


module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }