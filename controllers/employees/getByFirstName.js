// TODO: Do we need ByFirstName function? Not sure why we would ever use this function as we can have multiple michaels but never want to treat them all the same. (treat meaning update, delete, create etc.)

const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')

const getEmployeeByFirstName = (req, res) => {
  let sql = 'SELECT * FROM employees WHERE employees.first_name = ?;'
  sql = mysql.format(sql, [req.params.first_name])

  pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
  })
}

module.exports = {
    getEmployeeByFirstName
}