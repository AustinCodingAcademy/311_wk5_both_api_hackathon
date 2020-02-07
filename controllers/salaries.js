const express = require('express')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')
const mysql = require('mysql')

const getSalarieByEmployeeId = ('/:id', (req, res) => {
  let sql = `
  SELECT *
  FROM salaries
  WHERE emp_no = ?`

 
  sql = mysql.format(sql, req.params.id)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})

const getSalariesByDepartment = ('/:name', (req, res) => {
  let sql = `
  SELECT
    FORMAT(AVG(salaries.salary), 2) AS 'Average Salary',
    titles.title AS 'Title',
    departments.dept_no AS 'Department Number',
    departments.dept_name AS 'Department Name'
  FROM salaries
  INNER JOIN titles ON salaries.emp_no = titles.emp_no
    INNER JOIN dept_emp ON titles.emp_no = dept_emp.emp_no
    INNER JOIN departments ON dept_emp.dept_no = departments.dept_no
  WHERE departments.dept_name = 'finance'
  GROUP BY title
  ORDER BY 'Average Salary' DESC`;

  sql = mysql.format(sql, req.params.name)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})

const getCurrentSalarieByEmployeeId = ('/:id', (req, res) => {
  let sql = `
  SELECT *
  FROM employees
  INNER JOIN salaries ON employees.emp_no = salaries.emp_no
  WHERE employees.emp_no = ?
  ORDER BY from_date DESC
  LIMIT 1`;

 
  sql = mysql.format(sql, req.params.id)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})

module.exports = { getSalariesByDepartment, getSalarieByEmployeeId, getCurrentSalarieByEmployeeId }