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

    let sql = "SELECT * FROM employees WHERE emp_no = ?"
    let value = id
    
    sql = mysql.format(sql, value)

    pool.query(sql, (err, results) => {
        if (err) throw err
        return res.json(results)
    })
}

const getEmployeeSalaryById = (req, res) => {
  let id = req.params.id

  let sql = "SELECT * FROM employees INNER JOIN salaries on employees.emp_no = salaries.emp_no WHERE employees.emp_no = ?"
  let value = id

  sql = mysql.format(sql, value)

  pool.query(sql, (err, results) => {
    if (err) throw err
    return res.json(results)
  })
}

const getEmployeeDepartmentById = (req, res) => {
  let id = req.params.id

  let sql = "select * from employees inner join dept_emp on employees.emp_no = dept_emp.emp_no inner join departments on departments.dept_no = dept_emp.dept_no where employees.emp_no = ?"
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


module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName, getEmployeeSalaryById, getEmployeeDepartmentById }