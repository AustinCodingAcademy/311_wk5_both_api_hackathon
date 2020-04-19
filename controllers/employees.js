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
  let sql = 'SELECT * FROM ?? WHERE ?? = ? LIMIT 100';
  const replacements = ['employees', 'emp_no', req.params.emp_no]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};

const getEmployeesByFirstName = (req, res) => {
  let sql = 'SELECT * FROM ?? WHERE ?? = ? LIMIT 100';
  const replacements = ['employees', 'first_name', req.params.first_name]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};

const getEmployeesBySalary = (req, res) => {
  let sql = "SELECT employees.first_name, employees.last_name, salaries.salary FROM employees LEFT JOIN salaries ON employees.emp_no=salaries.emp_no WHERE salaries.salary = ? LIMIT 100";
  const replacements = [req.params.salary]
  sql = mysql.format(sql, replacements)
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesByTitle= (req, res) => {
  pool.query("SELECT employees.first_name, employees.last_name, titles.title FROM employees LEFT JOIN titles ON employees.emp_no=titles.emp_no LIMIT 100", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}
const getEmployeesByDept= (req, res) => {
  pool.query("SELECT employees.first_name, employees.last_name, departments.dept_name FROM employees LEFT JOIN dept_emp ON employees.emp_no=dept_emp.emp_no JOIN departments ON departments.dept_no=dept_emp.dept_no LIMIT 100", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesBySalary75KAbove= (req, res) => {
  pool.query("SELECT employees.first_name, employees.last_name, salaries.salary FROM employees JOIN salaries WHERE employees.emp_no = salaries.emp_no HAVING salaries.salary > 75000 LIMIT 100", (err, rows) => {
    if(err) return handleSQLError(res,err)
    return res.json(rows);
  })
 }



const getEmployeesByDeptNameWithNumber = (req,res) => {
pool.query("SELECT employees.first_name, employees.last_name, dept_emp.dept_no, departments.dept_name FROM employees JOIN dept_emp, departments WHERE employees.emp_no = dept_emp.emp_no and dept_emp.dept_no =departments.dept_no LIMIT 100", (err, rows) => {

 if(err) return handleSQLError(res,err)
 return res.json(rows);
})
}

const getEmployeesSeniorEngineer = (req,res) => {
pool.query("SELECT employees.first_name, employees.last_name, titles.title FROM employees JOIN titles WHERE employees.emp_no = titles.emp_no HAVING titles.title = 'Senior Engineer' LIMIT 100", (err,rows) => {
  if(err) return handleSQLError(res,err)
  return res.json(rows);
})
}


module.exports = { getEmployees,getEmployeesById, getEmployeesByFirstName, getEmployeesBySalary, getEmployeesByTitle, getEmployeesByDept, getEmployeesByDeptNameWithNumber, getEmployeesBySalary75KAbove, getEmployeesSeniorEngineer }

