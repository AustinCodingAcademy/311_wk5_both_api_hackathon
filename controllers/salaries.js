const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getEmployeesBySalaries = (req, res) => {
  pool.query(
    "SELECT employees.emp_no, employees.first_name, employees.last_name, salaries.salary FROM employees, salaries WHERE employees.emp_no=salaries.emp_no ORDER BY salary LIMIT 50",
    (err, rows) => {
      if (err) return handleSQLError(res, err);
      return res.json(rows);
    }
  );
};

const getSalaryByEmployeeId = (req, res) => {
  let sql =
    "SELECT employees.emp_no, employees.first_name, employees.last_name, salaries.salary FROM employees, salaries WHERE employees.emp_no = ? ORDER BY salary LIMIT 50";
  sql = mysql.format(sql, [req.params.emp_no]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getEmployeesBySalaries,
  getSalaryByEmployeeId,
};
