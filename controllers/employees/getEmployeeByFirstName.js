const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

const getEmployeeByFirstName = (req, res) => {
  let sql = 'SELECT * FROM employees WHERE employees.first_name = ?;'
  sql = mysql.format(sql, [req.params.first_name])
  console.log(sql)
  pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
  })
}

module.exports = {
    getEmployeeByFirstName
}