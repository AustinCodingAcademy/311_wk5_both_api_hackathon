const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getTitles = (req, res) => {
  pool.query("SELECT * FROM titles LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getTitlesByEmployeeId = (req, res) => {
  let sql =
    "SELECT employees.emp_no, first_name, last_name, dept_name, title FROM employees, departments, titles WHERE employees.emp_no = ? ORDER BY title LIMIT 50";
  sql = mysql.format(sql, [req.params.emp_no]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getTitles,
  getTitlesByEmployeeId,
};
