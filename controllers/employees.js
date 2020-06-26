const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

const getAllEmployees = (req, res) => {
    pool.query("SELECT * FROM employees", (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

  const getEmployeeById = (req, res) => {
    let sql = 'SELECT * FROM employees WHERE emp_no = ?'
    sql = mysql.format(sql, [req.params.emp_no])
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }


  module.exports = {
    getAllEmployees,
    getEmployeeById,
  }