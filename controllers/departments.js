const express = require('express')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')
const mysql = require('mysql')


const getDept = ('/', (req, res) => {
  pool.query(`SELECT * FROM departments`, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})


const getEmployeesByDepartmentName = ('/:name', (req, res) => {
  console.log(req.params)
  let sql = `
  SELECT 
    employees.emp_no AS 'Employee #', 
    employees.first_name AS 'First Name', 
    employees.last_name AS 'Last Name',
    departments.dept_no AS 'Department Number',
    departments.dept_name AS 'Department Name'
  FROM employees
    INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
    INNER JOIN departments ON dept_emp.dept_no = departments.dept_no
  WHERE departments.dept_name = ?`;

  sql = mysql.format(sql, req.params.name)

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

module.exports = { getDept, getEmployeesByDepartmentName, getSalariesByDepartment }