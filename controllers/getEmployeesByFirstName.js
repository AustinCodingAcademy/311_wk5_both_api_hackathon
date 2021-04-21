const mysql = require('mysql')
const db = require('../mysql/connection')
const sqlErrorHandler = require("../mysql/error");
const getEmployeesByFirstName = (req, res) => {
  // select all fields from employees table where first_name is req.first_name
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  let replacements = ['employees', 'first_name', req.params.first_name];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) throw err;
    return res.json(results);
  });
}

module.exports = getEmployeesByFirstName;