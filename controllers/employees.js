const mysql = require("mysql");
const pool = require("../mysql/connection");
const sqlErrorHandler = require("../mysql/error");

const getEmployees = (req, res) => {
  let sql = "SELECT * FROM ?? LIMIT ?";
  let replacements = ["employees.employees", 50];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
};

const getEmployeesById = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  let replacements = ["employees.employees", "emp_no", `${req.params.id}`];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
};

const getEmployeesByFirstName = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  let replacements = [
    "employees.employees",
    "first_name",
    `${req.params.first_name}`
  ];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
};

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };
