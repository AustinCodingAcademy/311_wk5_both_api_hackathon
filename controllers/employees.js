const pool = require("../mysql/connection.js");
const mysql = require("mysql");

const getEmployees = (req, res) => {
  let sql = "SELECT * FROM employees LIMIT 50";
  pool.query(sql, (err, result) => {
    if (err) {
      return res.json({
        error: true,
        message: "Error occurred: " + err,
      });
    } else {
      return res.json(result);
    }
  });
};

const getEmployeesById = (req, res) => {
  let sql = "SELECT * FROM employees WHERE id = ?";
  const replacements = [req.params.id];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, result) => {
    if (err) {
      return res.json({
        error: true,
        message: "Error occurred: " + err,
      });
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
    if (err) {
      return res.json({
        error: true,
        message: "Error occurred: " + err,
      });
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
