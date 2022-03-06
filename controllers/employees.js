const mysql = require('mysql')
const pool = require('../mysql/connection')
//const { handleSQLError } = require('../sql/error')

const getEmployees = (req, res) => {
  // SELECT ALL USERS
     console.log ("Inside getAllUsers");
   let sql="SELECT * FROM employees";
    
  pool.query(sql, (err, rows) => {
   // if (err) return handleSQLError(res, err)
    return res.json(rows);
  })  
}
/*
const getEmployeesById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let idValue=req.params.id;
  console.log(idValue);
  let sql = `SELECT * FROM users where id=?`;
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
  let sql = `DELETE FROM users WHERE first_name=?`;

  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [firstName])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}
*/

module.exports = { 
    getEmployees
    // getEmployeesById, 
    // getEmployeesByFirstName 
    }