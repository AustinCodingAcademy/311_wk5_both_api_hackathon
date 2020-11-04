<<<<<<< HEAD
const mysql = require('mysql')
const pool = require('../mysql/connection')
const { apiErrorHandler } = require('../mysql/')




const getEmployees = (req,res) => {

  //select no more than 50 from the employees list 
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if(err) return apiErrorHandler(res, err)
    return res.json(rows)
  })

}
const getEmployeesById = (req,res) => {
 
 
  //return individual who employee numbers match the number id provided 
  let sql = "SELECT * FROM employees WHERE emp_no = ?"
  sql = mysql.format(sql, [req.params.id])
    pool.query(sql, (err, rows) => {
    if(err) return apiErrorHandler(res, err)
    return res.json(rows)
})
}

const getEmployeesByFirstName = (req,res) => {
  
  let sql = "SELECT * FROM employees WHERE first_name = ?"
  sql = mysql.format(sql, [req.params.first_name])
  
    pool.query(sql, (err, rows) => {
    if(err) return apiErrorHandler(res, err)
    return res.json(rows)
  })}
  


=======
const mysql = require('mysql');
const pool = require("../mysql/connection");
const { apiErrorHandler } = require('../error/ApiError');

const getEmployees = (req,res) => {
    
    pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
        //the following is assuming there is a function to handle errors named handleSQLErrors
        if (err) return apiErrorHandler(res,err)
        return res.json(rows);
    })
}

const getEmployeesById = (req,res) => {
    //select the employees by ID
    let id = req.params.id;
    let sql ="SELECT * FROM employees WHERE emp_no = ?";
    sql = mysql.format(sql, [id]);

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

const getEmployeesByFirstName = (req,res) => {
    let first_name = req.params.first_name;
    let sql = "SELECT * FROM employees WHERE first_name = ?"

    sql = mysql.format(sql, [first_name]);

    pool.query(sql, (err, results) => {
        if (err) return apiErrorHandler(res, err)
        return res.json(results);
    })
}
>>>>>>> 8ab3a8419872498e7c42f7d5ca6327526b548709


module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }