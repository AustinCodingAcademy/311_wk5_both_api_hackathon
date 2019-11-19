const mysql = require("mysql");
const pool = require("../mysql/connection");
const sqlErrorHandler = require("../mysql/error");

const getSalaries = (req, res) => {
  let sql = "SELECT * FROM ?? LIMIT ?";
  let replacements = ["employees.salaries", 50]
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
};

const getSalariesById = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  let replacements = ["employees.salaries", "emp_no", `${req.params.id}`];
  sql = mysql.format(sql, replacements);

  console.log(replacements);

  pool.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  }); 
};

const getSalariesRangeHigh = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  let replacements = ["employees.salaries", "salary", `${req.params.id}`];
  sql = mysql.format(sql, replacements);

  console.log(replacements);

  pool.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
};

module.exports = { getSalaries, getSalariesById, getSalariesRangeHigh };