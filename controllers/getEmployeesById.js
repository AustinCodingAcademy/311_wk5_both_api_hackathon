const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

const getEmployeesById = (req, res) => {

  // if there are no queries 
  if (Object.keys(req.query).length === 0) {

    let sql = "SELECT ?? FROM ?? WHERE ?? = ?"
    sql = mysql.format(sql, ['*', 'employees', 'emp_no', req.params.id])
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })

  }

  else {

    //if a query string includes "salary"
    if(req.query.include.indexOf('salary') > -1) {
      let sql = "SELECT ??, ??, ??, ?? FROM ?? JOIN ?? ON ?? = ?? WHERE ?? = ?"
      sql = mysql.format(sql, ['employees.emp_no', 'first_name', 'last_name', 'salary', 'employees', 'salaries', 'employees.emp_no', 'salaries.emp_no', 'employees.emp_no', req.params.id])
  
      pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
        })
      }
    //if any other query strings are sent
    else {
      return res.send("No valid queries recieved.")
    }
  }
}

  module.exports = { getEmployeesById };