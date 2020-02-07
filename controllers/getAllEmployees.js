const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/errors')

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 50", (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

module.exports = {getEmployees}