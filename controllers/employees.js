const mysql = require('mysql')
const pool = require('../mysql/connection')


const getEmployees = (req, res) => {
  // SELECT ALL EMployees
  let sql = "SELECT * FROM ?? LIMIT ?";
  let replacements = [ 'employees', 50 ];
  sql = mysql.format(sql, replacements);
  
  pool.query(sql, (err, rows) => {
    if (err) return res.status(500).send('something went wrong');
    return res.json(rows);
})
}

const getEmployeesById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let sql = "SELECT * FROM ?? WHERE ?? = ?"
    let replacements = ['employees', 'emp_no', req.params.emp_no]
    sql = mysql.format(sql, replacements)

    pool.query(sql, (err, rows) => {
      if (err) return res.status(500).send('something went wrong');
      return res.json(rows);
  })
}


const getEmployeesByFirstName = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME 
  let sql = "SELECT * FROM ?? WHERE ?? = ?"
    let replacements = ['employees', 'first_name', req.params.first_name]
    sql = mysql.format(sql, replacements)

    pool.query(sql, (err, rows) => {
      if (err) return res.status(500).send('something went wrong');
      return res.json(rows);
  })
}


const getIdWithSalary = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME 
  let sql = "SELECT * FROM ?? WHERE ?? = ?"
  let replacements = ['salaries', 'emp_no', req.params.id]
  sql = mysql.format(sql, replacements)

    pool.query(sql, (err, rows) => {
      if (err) return res.status(500).send('something went wrong');
      return res.json(rows);
  })
}


const getIdWithDepartment = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME 
  let sql = "SELECT * FROM ?? WHERE ?? = ?"
  let replacements = ['dept_emp', 'emp_no', req.params.id]
  sql = mysql.format(sql, replacements)
    pool.query(sql, (err, rows) => {
      if (err) return res.status(500).send('something went wrong');
      return res.json(rows);
  })
}


const getSalaryById = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME 
  let sql = "SELECT * FROM ?? WHERE ?? = ?"
  let replacements = ['salaries', 'emp_no', req.params.id]
  sql = mysql.format(sql, replacements)
    pool.query(sql, (err, rows) => {
      if (err) return res.status(500).send('something went wrong');
      return res.json(rows);
  })
}



module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName, getIdWithSalary, getIdWithDepartment, getSalaryById}