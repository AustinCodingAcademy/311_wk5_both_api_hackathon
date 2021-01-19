const { response } = require('express')
const mysql = require('mysql')
const pool = require('../mysql/connection')

const getManagerInfoByDept = (req,res) => {
  let sql = "SELECT departments.dept_name, first_name, last_name, salaries.salary, salaries.from_date, salaries.to_date FROM employees JOIN dept_manager ON employees.emp_no=dept_manager.emp_no JOIN departments ON dept_manager.dept_no=departments.dept_no JOIN salaries ON salaries.emp_no=employees.emp_no WHERE dept_name = ?"
  sql = mysql.format(sql, [(req.params.dept_name)]);
  pool.query(sql, (err, results) => {
    if (err || results.length <= 0) {return res.status(500).send('An unexpected error occurred')
    } else {
      return res.json(results);
    }
  })
}


module.exports = { 
    getManagerInfoByDept
  }