
const mysql = require("mysql");
const db = require("../mysql/connection");
const sqlErrorHandler = require("../mysql/error");

const getHighestPaidEmployees = (req, res) => {
  let sql = "SELECT ??, ??, ?? FROM ?? JOIN ?? ON ?? = ?? ORDER BY ?? DESC LIMIT ?";
  let replacements = [
    "first_name",
    "last_name",
    "salary",
    "employees.employees",
    "employees.salaries",
    "employees.employees.emp_no",
    "employees.salaries.emp_no",
    "salary",
    10
  ];
  sql = mysql.format(sql, replacements);

  db.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
};

const getSalariesById = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  let replacements = ["employees.salaries", "emp_no", `${req.params.id}`];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
};

const sumOfSalaries = (req, res) => {
  let sql = "SELECT SUM(??) FROM ??";
  let replacements = ["salary", 'employees.salaries'];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
};

module.exports = { getHighestPaidEmployees, getSalariesById, sumOfSalaries };