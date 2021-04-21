const mysql = require('mysql')
const db = require('../mysql/connection')
const sqlErrorHandler = require("../mysql/error");
const getEmployees = (req, res) => {
  // select all fields from employees table limit 50
  let sql = "SELECT * FROM ?? LIMIT ?";
  let replacements = ['employees', 50];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) throw err;
    return res.json(results);
  });
}
module.exports = getEmployees;
