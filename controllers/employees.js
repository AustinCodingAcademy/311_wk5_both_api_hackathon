const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')


// show all the comments
const getAllEmployees = (req, res) => {
    
      // SELECT ALL USERS
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};

module.exports = { getAllEmployees};