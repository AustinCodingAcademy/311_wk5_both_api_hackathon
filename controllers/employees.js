const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getEmployees = (req, res) => {
  // SELECT ALL EMployees
  
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let sql = "SELECT *FROM users WHERE id =?" //value that went here would go down
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ['users', req.params.id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesByFirstName = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME 
  let sql = "INSERT INTO users (??, ??) VALUES (?, ?)"

  sql= mysql.format(sql, ['first_name', 'last_name', 'bogus', 'user' ])
  // WHAT GOES IN THE BRACKETS
 

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}


module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }