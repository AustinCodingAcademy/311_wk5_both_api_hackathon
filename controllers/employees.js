const mysql = require('mysql')
const pool = require ('../mysql/connection')

const getEmployees = (res, req) => {
  res.send('getting employees...')
};

const getEmployeesById = (res, req) => {
  res.send('getting employees...')
}

const getEmployeesByFirstName = (res, req) => {
  res.send('getting employees...')
}

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }