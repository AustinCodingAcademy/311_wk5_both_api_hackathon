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
  let sql = mysql.format(emp_no, [req.params.emp_no])
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

const getEmployeesSalaries = (req, res) => {
  let salaries = "SELECT * FROM employees JOIN salaries WHERE employees.emp_no = salaries.emp_no and employees.emp_no = ?"
  console.log("get employees salaries")
  let sql = mysql.format(salaries, [req.params.emp_no])
  pool.query(sql, (err, rows) => {
    if (err) return res.status(500).send('Something went wrong!');
    
    return res.json(rows);
  })
}

const getEmployeesDepartment = (req, res) => {
  let department = "SELECT * FROM employees JOIN departments WHERE departments.dept_name = ? LIMIT 10"
  console.log("get departments")
  let sql = mysql.format(department, [req.params.dept_name])
  pool.query(sql, (err, rows) => {
    if (err) return res.status(500).send('Something went wrong!');
    
    return res.json(rows);
  })
}



module.exports = { getEmployees, getEmployeesByEmp_no, getEmployeesByFirstName, getEmployeesSalaries, getEmployeesDepartment }

