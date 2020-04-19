const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');


const getEmployeesSalary = ((req, res) => {
    let sql = "SELECT ??, ??, ?? FROM ?? JOIN ?? ON ?? = ?? LIMIT 50"
    sql = mysql.format(sql, ['first_name', 'last_name', 'salary', 'employees', 'salaries', 'employees.emp_no', 'salaries.emp_no'])

    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
      })
    })
  
module.exports = { getEmployeesSalary };