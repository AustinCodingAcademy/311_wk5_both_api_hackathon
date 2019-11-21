const mysql = require('mysql');
const pool = require('../mySQL/connection')


const getEmployees = (req, res) => {
  let emp = "SELECT * FROM employees LIMIT 50"
  pool.query(emp, (err, rows) => {
    if (err) return res.status(500).send('Something went wrong!')
  return res.json(rows);
  })
}

const getEmployeesByEmp_no = (req, res) => {
  let emp_no = "SELECT * FROM employees WHERE emp_no = ?"
  console.log("employee by no")
  let sql = mysql.format(emp_no, [req.params.emp_no])
  pool.query(sql, (err, rows) => {
    if (err) return res.status(500).send('Something went wrong!');
    return res.json(rows);
  })
}

const getEmployeesByFirstName = (req, res) => {
  let name = "SELECT * FROM employees WHERE first_name = ?"
  console.log("get employee by first name")
  let sql = mysql.format(name, [req.params.first_name])
  pool.query(sql, (err, rows) => {
    if (err) return res.status(500).send('Something went wrong!');
    
    return res.json(rows);
  })
}

module.exports = { getEmployees, getEmployeesByEmp_no, getEmployeesByFirstName }

