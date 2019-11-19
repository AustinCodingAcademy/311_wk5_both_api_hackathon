const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getEmployees = (req, res) => {
    // SELECT ALL USERS
    pool.query("SELECT * FROM employees LIMIT 10", (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

  const getEmployeesById = (req, res) => {
    // SELECT USERS WHERE ID = <REQ PARAMS ID>
    let sql = "SELECT * FROM employees WHERE emp_no = ?"
    // WHAT GOES IN THE BRACKETS
    sql = mysql.format(sql, [req.params.emp_no])
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

  const getEmployeesByFirstName = (req, res) => {
    // SELECT FROM USERS WHERE FIRST NAME = <REQ PARAMS FIRST_NAME>
    let sql = "SELECT * FROM employees WHERE first_name = ?"
    // WHAT GOES IN THE BRACKETS
    sql = mysql.format(sql, [req.params.first_name])
  
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