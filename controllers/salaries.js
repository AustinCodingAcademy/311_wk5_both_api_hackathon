const pool = require("../mysql/connection.js");
const mysql = require("mysql");

const getSalaries = (req, res) => {
  let sql = "SELECT * FROM salaries LIMIT 50";
  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send("Something went wrong.");
    } else {
      return res.json(result);
    }
  });
};

const getSalaryHistory = (req, res) => {
  let sql = "SELECT * FROM salaries WHERE emp_no = ?";
  const replacements = [req.params.id];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send("Something went wrong.");
    } else {
      return res.json(result);
    }
  });
};

const getCurrentSalary = (req, res) => {
  let sql =
    "SELECT * FROM salaries WHERE emp_no = ? ORDER BY salary DESC LIMIT 1";
  const replacements = [req.params.id];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send("Something went wrong.");
    } else {
      return res.json(result);
    }
  });
};

const getSalaryWithName = (req, res) => {
  let sql =
    "SELECT employees.first_name, employees.last_name, employees.emp_no, salaries.salary, salaries.from_date, salaries.to_date FROM employees INNER JOIN salaries ON salaries.emp_no=employees.emp_no  WHERE employees.emp_no = ? ";
  const replacements = [req.params.id];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send("Something went wrong.");
    } else {
      return res.json(result);
    }
  });
};

module.exports = {
  getSalaries,
  getSalaryHistory,
  getCurrentSalary,
  getSalaryWithName,
};
