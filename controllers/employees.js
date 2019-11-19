const mysql = require('mysql')
const pool = require ('../mysql/connection')
const sqlErrorHandler = require('../mysql/error')

const getEmployees = (req, res) => {

  let sql = 'SELECT * FROM ?? LIMIT ?'
  let replacements = ['employees.employees', 50]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, results) => {
    if (err) {
      return sqlErrorHandler(res, err)
    } else {
      return res.json(results)
    }
  })
};

const getEmployeesById = (req, res) => {
  res.send('getting employees...')
}

const getEmployeesByFirstName = (req, res) => {
  res.send('getting employees...')
}

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }