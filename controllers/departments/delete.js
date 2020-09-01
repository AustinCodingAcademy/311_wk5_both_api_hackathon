const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const deleteDepartmentByNumber = (req, res) => {
  let sql = "DELETE FROM departments WHERE dept_no = ?;"
  sql = mysql.format(sql, [req.params.dept_no])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} departments` });
  })
}

module.exports = {deleteDepartmentByNumber}