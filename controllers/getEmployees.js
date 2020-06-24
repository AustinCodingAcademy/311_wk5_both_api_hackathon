const mysql = require('mysql')
// const pool = require('../sql/connection')


const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports {getEmployees}