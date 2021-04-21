const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getEmployeesCurrentSalary = (req, res) => {
  let sql = "select ?? from ?? where ?? = ? ORDER BY ?? DESC LIMIT ?";
  const replacements = [
    "*",
    "salaries",
    "emp_no",
    req.params.emp_no,
    "to_date",
    1
  ];

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getEmployeesCurrentSalary
};
