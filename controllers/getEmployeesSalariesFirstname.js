const mysql = require("mysql");
const pool = require("../mysql/connections");
const { handleSQLError } = require("../mysql/error");

const getEmployeesSalariesFirstName = (req, res) => {
  let sql = "SELECT ??, ??, ?? FROM ?? JOIN ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["employees.first_name", "employees.last_name", "salaries.salary", "employees", "salaries", "employees.first_name", req.params.firstname]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = { getEmployeesSalariesFirstName };
