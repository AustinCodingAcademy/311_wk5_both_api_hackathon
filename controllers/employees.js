const express = require('express')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')
const mysql = require('mysql')


const getEmployees = ('/', (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
})


const getEmployeesById = ('/:id', (req, res) => {
  let sql = "SELECT * FROM employees WHERE emp_no = ?";

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