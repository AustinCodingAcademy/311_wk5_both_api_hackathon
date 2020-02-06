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
    employees.emp_no, 
    employees.first_name, 
    employees.last_name,
    departments.dept_no,
    departments.dept_name
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
    salaries.salary,
    departments.dept_no,
    departments.dept_name
  FROM salaries
    INNER JOIN dept_emp ON salaries.emp_no = dept_emp.emp_no
    INNER JOIN departments ON dept_emp.dept_no = departments.dept_no
  WHERE departments.dept_name = ?`;

  sql = mysql.format(sql, req.params.name)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})

module.exports = { getDept, getEmployeesByDepartmentName, getSalariesByDepartment }