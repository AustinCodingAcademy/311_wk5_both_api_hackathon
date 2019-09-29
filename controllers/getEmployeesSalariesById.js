const mysql = require("mysql");
const pool = require("../mysql/connections");
const { handleSQLError } = require("../mysql/error");

const getEmployeesSalariesById = (req, res) => {
  // SELCT USERS WHERE IS = <REQ PARAMS ID>;
  let sql = "SELECT ??, ??, ?? FROM ?? JOIN ?? WHERE ?? = ?? AND ?? = ? LIMIT ?";
  sql = mysql.format(sql, ["employees.first_name", "employees.last_name", "salaries.salary", "employees", "salaries", "employees.emp_no", "salaries.emp_no", "employees.emp_no", req.params.id, 1]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = { getEmployeesSalariesById };
