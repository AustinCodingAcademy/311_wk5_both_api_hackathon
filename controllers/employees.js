const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};
const getEmployeesById = (req,res) => {
  let sql = 'SELECT * FROM ?? WHERE ?? = ?';
  const replacements = ['employees', 'emp_no', req.params.emp_no]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};

const getEmployeesByFirstName = (req, res) => {
  let sql = 'SELECT * FROM ?? WHERE ?? = ?';
  const replacements = ['employees', 'first_name', req.params.first_name]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};

const getEmployeesBySalary = (req, res) => {
  pool.query("SELECT employees.first_name, employees.last_name, salaries.salary FROM employees LEFT INNER JOIN salaries ON employees.emp_no=salaries.emp_no ", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}
const getEmployeesByTitle= (req, res) => {
  pool.query("SELECT employees.first_name, employees.last_name, titles.title FROM employees LEFT INNER JOIN titles ON employees.emp_no=titles.emp_no ", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}
const getEmployeesByDept= (req, res) => {
  pool.query("SELECT employees.first_name, employees.last_name, departments.dept_name FROM employees LEFT JOIN dept_emp ON employees.emp_no=dept_emp.emp_no JOIN departments ON departments.dept_no=dept_emp.dept_no", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}



// SELECT
// users.first_name,
// usersContact.email
// FROM users
// JOIN usersContact
// WHERE
// users.id = usersContact.user_id;






module.exports = { getEmployees,getEmployeesById, getEmployeesByFirstName, getEmployeesBySalary, getEmployeesByTitle, getEmployeesByDept }