const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getDepartments = (req, res) => {
  pool.query("SELECT * FROM departments", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getDepartmentsByEmployeeId = (req, res) => {
  let sql =
    "SELECT employees.emp_no, first_name, last_name, dept_no, dept_name FROM employees, departments WHERE emp_no = ? ORDER BY dept_name LIMIT 50";
  sql = mysql.format(sql, [req.params.emp_no]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getDepartments,
  getDepartmentsByEmployeeId,
};
