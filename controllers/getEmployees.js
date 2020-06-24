const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')


const getEmployees = (req, res) => {
 pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesById = (req, res) => {
  let sql = "SELECT * FROM employees WHERE emp_no = ?"

  const id = req.params.emp_no
  sql = mysql.format(sql, [id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesByFirstName = (req, res) => {
  let sql = "SELECT * FROM employees WHERE first_name = ?"

  const firstname = req.params.first_name
  sql = mysql.format(sql, [firstname])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports = {getEmployees, getEmployeesById, getEmployeesByFirstName}