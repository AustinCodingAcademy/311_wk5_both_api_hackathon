const mysql = require('mysql')
const pool = require('../mysql/connection.js')

const handleSQLError = (res, err) => {
  console.log('SQL Error: ', err)
  return res.status(500).send('An unexpected error occurred');
}

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}
const getEmployeesById = (req, res) => {
  let sql = "SELECT * FROM employees WHERE ?? = ? Limit 50"
  const replacements = ['emp_no', req.params.id]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}
const getEmployeesByFirstName = (req, res) => {
  let sql = "SELECT * FROM employees WHERE ?? = ?"
  const replacements = ['first_name', req.params.first_name]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports = {
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName
}