const { response } = require('express')
const mysql = require('mysql')
const pool = require('../mysql/connection')

const getDepartmentsByName = (req,res) => {
  let sql = "SELECT * FROM departments WHERE dept_name = ? LIMIT 50"

  sql = mysql.format(sql, [(req.params.dept_name)]);

  pool.query(sql, (err, rows) => {
    if (err)  return res.status(500).send('An unexpected error occurred');
    return res.json(rows);
  })
}

const getEmployeeByDeptAndYear = (req,res) => {
    let sql = "SELECT departments.dept_name, first_name, last_name, dept_emp.from_date, dept_emp.to_date FROM employees JOIN dept_emp ON employees.emp_no=dept_emp.emp_no JOIN departments ON dept_emp.dept_no=departments.dept_no WHERE dept_name = ? AND SUBSTRING(from_date, 1, 4) = ?"
  
    sql = mysql.format(sql, [(req.params.dept_name, req.params.from_date)]);
  
    pool.query(sql, (err, rows) => {
      if (err)  return res.status(500).send('An unexpected error occurred');
      return res.json(rows);
    })
  }

module.exports = { 
    getDepartmentsByName,
    getEmployeeByDeptAndYear
  }