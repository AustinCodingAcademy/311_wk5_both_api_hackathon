const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

const getEmployees = (req, res) => {
  // SELECT ALL USERS
     console.log ("Inside getAllUsers");
   let sql="SELECT * FROM employees LIMIT 50";
    
  pool.query(sql, (err, rows) => {
   if (err) return handleSQLError(res, err)
    return res.json(rows);
  })  
}

const getEmployeesById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let idValue=req.params.id;
 // console.log(idValue);
  let sql = `SELECT * FROM employees where emp_no=?`;
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [idValue]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}


const getEmployeesByFirstName = (req, res) => {
  // DELETE FROM USERS WHERE FIRST NAME = <REQ PARAMS FIRST_NAME>
  let firstName=req.params.first_name;
 console.log(firstName);
  let sql = `SELECT * FROM employees where first_name=? LIMIT 5`;

  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [firstName])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}


module.exports = { 
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName 
    }