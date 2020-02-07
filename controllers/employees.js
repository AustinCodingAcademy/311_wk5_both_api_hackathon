const pool = require('../mysql/connection');
const mysql = require('mysql');

const getEmployees = ((req, res) => {
  pool.query("SELECT * FROM employees limit 50", (err, rows) => {
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

module.exports = {
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName
}