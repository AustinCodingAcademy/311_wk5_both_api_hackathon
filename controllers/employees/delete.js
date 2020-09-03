const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')

const deleteEmployee = (req, res) => {
  let sql = "DELETE FROM employees WHERE emp_no = ?"
  sql = mysql.format(sql, [req.params.emp_no])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

 module.exports = {
    deleteEmployee
 }