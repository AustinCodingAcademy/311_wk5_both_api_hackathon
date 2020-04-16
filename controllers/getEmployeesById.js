const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

const getEmployeesById = (req, res) => {
  let sql = "SELECT ?? FROM ?? WHERE ?? = ?"
  sql = mysql.format(sql, ['*', 'users', 'id', req.params.id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

  module.exports = {
    getEmployeesById
  }