const mysql = require('mysql');
const pool = require('../mySQL/connection')


const getEmployees = (req, res) => {
  let emp = "SELECT * FROM employees LIMIT 50"
  pool.query(emp, (err, rows) => {
    if (err) return res.status(500).send('Something went wrong!')
  return res.json(rows);
  })
}

const getEmployeesById = (req, res) => {
  let id = "SELECT * FROM employees WHERE id = ?"
  let sql = mysql.format(id, [req.params.id])
  pool.query(sql, (err, rows) => {
    if (err) return res.status(500).send('Something went wrong!');
    return res.json(rows);
  })
}

const getEmployeesByFirstName = (req, res) => {
  let name = "SELECT * FROM employees WHERE first_name = ?"
  let sql = mysql.format(name, [req.params.first_name])
  pool.query(sql, (err, rows) => {
    if (err) return res.status(500).send('Something went wrong!');
    return res.json(rows);
  })
}

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }

