const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees.employees LIMIT 50;", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
    // return res.json('getting employees...');
  })
}

const getEmployeesById = (req, res) => {
  let sql = `SELECT * FROM employees.employees WHERE emp_no = ?`
//  console.log(sql)
//  return res.json({});
  sql = mysql.format(sql, [req.params.id])
  
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
    // return res.json('getting employees...');
  })
}

// The query is fine but i can't work if the one on top is active
// const getEmployeesByFirstName = (req, res) => {
//   let sql = `SELECT * FROM employees.employees WHERE first_name = "${req.params.first_name}"`
//   sql = mysql.format(sql, [])

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err)
//     return res.json(rows);
//     // return res.json('getting employees...');
//   })
// }

const getEmployeesByFirstName = (req, res) => {
  let sql = 'SELECT * FROM employees.employees WHERE first_name = ?;';
  let replacements = [req.params.first_name];
  sql = mysql.format(sql, replacements);
  
  pool.query(sql, (err, rows)=> {
  if(err) {
  return res.status(500).send('Error: '+ err);
  }
  return res.json(rows);
  })}

module.exports = {
  getEmployees,
  getEmployeesByFirstName,
  getEmployeesById
}