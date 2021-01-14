const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error')

const getEmployees = (req, res) => {
  // SELECT ALL Employees 
  let sql = "SELECT * FROM employees"
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

const getEmployeesById;

const getEmployeesByFirstName;


module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }