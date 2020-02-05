var express = require('express')
var router = express.Router()
const employeesControllers = require ('../controllers/employees');
const msql = require('/mysql')
const pool = require('../mysql/connection')

pool.query('SELECT * FROM employees', (err, rows) => {
  if (err) {
  console.log({ 'message': 'Error occurred: ' + err })
  return res.status(500).send('Uh oh . . .')
  }
  res.json(rows)
  });

router.get('/employees', employeesControllers.getEmployees)

router.get('/employees/:id', employeesControllers.getEmployeesById)

router.get('/employees/firstname/:first_name', employeesControllers.getEmployeesByFirstName)





module.exports = router