const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../sql/error')

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM users LIMIT 50", (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

module.exports = {getEmployees}