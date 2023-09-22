
const mysql = require('mysql2')
const pool = require('../sql/connection')
// const { handleSQLError } = require('../sql/error')



const getEmployees = (req, res) => {
  // SELECT ALL USERS
  console.log('here?')
  pool.query("SELECT * FROM employees LIMIT 100", (err, rows) => {
    if (err) return res.json(err)
    console.log('or here?')
    return res.json(rows);
  })
}



module.exports = {getEmployees}