const mysql = require('mysql')
const pool = require ('../mysql/connection')

const getEmployees = (req, res) => {
  res.send('getting employees...')
};

const getEmployeesById = (req, res) => {
  res.send('getting employees...')
}

const getEmployeesByFirstName = (req, res) => {
  res.send('getting employees...')
}

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }