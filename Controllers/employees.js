const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getEmployees = () => {
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesById = () => {
  let sql = "SELECT ?? FROM ?? WHERE ?? = ?";
  const replacements = ["*", "employees", "id", req.params.id];

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesByFirstName = () => {
  let sql = "SELECT FROM ?? WHERE ?? = ?";
  const replacements = ["employees", "first_name", req.params.first_name];

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
  });
};

module.exports = {
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName
};
