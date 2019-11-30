const getEmployees = require('./getEmployees')
const getEmployeesByFirstName = require('./getEmployeesByFirstName')
const getEmployeesById = require('./getEmployeesById')
const sqlErrorHandler = require("../mysql/error");

module.exports = {getEmployees, getEmployeesByFirstName, getEmployeesById};


