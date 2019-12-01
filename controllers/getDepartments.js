const mysql = require('mysql')
const db = require('../mysql/connection')
const sqlErrorHandler = require("../mysql/error");

const getDepartments = (req, res) => {
  let sql = "select ?? from ?? order by ?? asc";
  let replacements = ['dept_name', 'departments', 'dept_name'];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.status(204).json(results);
  });
}
module.exports = getDepartments;
