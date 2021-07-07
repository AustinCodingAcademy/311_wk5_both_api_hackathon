const express = require('express')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')
const mysql = require('mysql')


const getEmployees = ('/', (req, res) => {

  if (req.query.include.indexOf('salary') > -1) {
    salary = `INNER JOIN salaries ON employees.emp_no = salaries.emp_no`
  }

  if (req.query.include.indexOf('department') > -1) {
    department = `
    INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
    INNER JOIN departments ON dept_emp.dept_no = departments.dept_no
    `
  }

  let sql = `
      SELECT *
      FROM employees
      ${salary}
      ${department}
      LIMIT 50`

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})


const getEmployeesById = ('/:id', (req, res) => {

  if (req.query.include.indexOf('salary') > -1) {
    salary = `INNER JOIN salaries ON employees.emp_no = salaries.emp_no`
  }

  if (req.query.include.indexOf('department') > -1) {
    department = `
    INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
    INNER JOIN departments ON dept_emp.dept_no = departments.dept_no
    `
  }

  let sql = `
      SELECT *
      FROM employees
      ${salary}
      ${department}
      WHERE employees.emp_no = ?`

  sql = mysql.format(sql, Number(req.params.id))

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})


const getEmployeesByFirstName = ('/firstname/:firstName', (req, res) => {
  let sql = "SELECT * FROM employees WHERE first_name = ?";

  sql = mysql.format(sql, req.params.firstName)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }