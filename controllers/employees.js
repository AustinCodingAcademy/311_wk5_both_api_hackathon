const express = require("express");
const mysql = require("mysql");
const pool = require("../mySQL/connections");
const { handleSQLError } = require("../mySQL/error");

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesById = (req, res) => {
  let sql = "SELECT * FROM employees WHERE emp_no = ?";
  const replacements = [req.params.emp_no];
  sql = mysql.format(sql, [replacements]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

//const controllers = express.controllers();

module.exports = {
  getEmployees,
  getEmployeesById
  // getEmployeesByFirstName,
  // getEmployeesSalary,
  // getEmployeesDepartment,
  // getOneSalaryById
};
