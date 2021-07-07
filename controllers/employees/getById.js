const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')


const getEmployeeById = (req, res) => {
  let sql = 'SELECT * FROM employees WHERE emp_no = ?;'
  sql = mysql.format(sql, [req.params.emp_no])

  pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
  })
}

module.exports = {
    getEmployeeById
}