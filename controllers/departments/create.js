const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')

const createDepartment = (req, res) => {
  let sql = "INSERT INTO departments (dept_no, dept_name)VALUES(?, ?);"
  sql = mysql.format(sql, [req.body.dept_no, req.body.dept_name])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

module.exports = {
  createDepartment
}
