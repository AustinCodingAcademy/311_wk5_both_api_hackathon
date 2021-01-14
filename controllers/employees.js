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

const getEmployeesById = (req, res) => {
    let id = req.params.id

    let sql = "SELECT FROM employees WHERE id = ?"
    let value = id
    
    sql = mysql.format(sql, value)

    pool.query(sql, (err, results) => {
        if (err) throw err
        return res.json(results)
    })
}

const getEmployeesByFirstName = (req, res) => {
  let firstName = req.params.first_name;
  let sql = "SELECT FROM employees WHERE first_name = ?"
  sql = mysql.format(sql, [firstName])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results)
  })

};


module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }