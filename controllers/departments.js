const mysql = require('mysql')
const pool = require('../mysql/connection.js')

const handleSQLError = (res, err) => {
  console.log('SQL Error: ', err)
  return res.status(500).send('An unexpected error occurred');
}

const getDepartments = (req, res) => {
  pool.query("SELECT * FROM departments", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}
const getDepartmentsById = (req, res) => {
  // res.send("getting employee's department")
  let sql ="select employees.first_name, employees.last_name, departments.dept_name from employees inner join dept_emp on dept_emp.emp_no = employees.emp_no inner join departments on departments.dept_no = dept_emp.dept_no where ?? = ?"
  const replacements = ['employees.emp_no', req.params.id]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}


module.exports = {
  getDepartments,
  getDepartmentsById
}