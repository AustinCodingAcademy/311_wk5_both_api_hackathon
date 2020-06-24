const mysql = require('mysql')
// const pool = require('../sql/connection')


const getEmployeesByFirstName = (req, res) => {
  pool.query("SELECT first_name FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports {getEmployeesByFirstName}