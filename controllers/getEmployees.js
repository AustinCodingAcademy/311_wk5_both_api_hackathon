const mysql = require('mysql')
const pool = require('../mysql/connection')
const handleSQLError = require('../mysql/errors')

const getEmployees = (req, res) => {
 let sql = "select * from ?? LIMIT 50;"
 const replacements = ['employees']
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results)
  })
}

module.exports = { getEmployees }
