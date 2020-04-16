const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');


const getEmployees = (req, res) => {
    // SELECT ALL USERS
    pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }
  






  module.exports = { getEmployees };