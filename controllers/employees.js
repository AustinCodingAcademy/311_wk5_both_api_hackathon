const pool = require("../mysql/connection.js");
const mysql = require("mysql");

const getEmployees = (req, res) => {
  let sql = "SELECT * FROM employees LIMIT 50";
  pool.query(sql, (err, result) => {
    if (err || result.length <= 0) {
      return res.status(500).send("Something went wrong.");
    } else {
      return res.json(result);
    }
  });
};

const getEmployeesById = (req, res) => {
  let sql = "SELECT * FROM employees WHERE emp_no = ?";
  const replacements = [req.params.id];
  sql = mysql.format(sql, replacements);

  console.log(sql);

  pool.query(sql, (err, result) => {
    if (err || result.length <= 0) {
      return res.status(500).send("Something went wrong.");
    } else {
      return res.json(result);
    }
  });
};

const getEmployeesByFirstName = (req, res) => {
  let sql = "SELECT * FROM employees WHERE first_name = ?";
  const replacements = [req.params.first_name];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, result) => {
    if (err || result.length <= 0) {
      return res.status(500).send("Something went wrong.");
    } else {
      return res.json(result);
    }
  });
};

module.exports = {
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName,
};
