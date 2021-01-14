const { response } = require('express')
const mysql = require('mysql')
const pool = require('../mysql/connection')

// Create the following functions 


const getEmployees = (req, res) => {
    pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
        if (err)  return res.status(500).send('An unexpected error occurred');
        return res.json(rows);
    })
}

// const getEmployeesById = (req, res) => {
//     res.send("getting employees...")
// } 

// getEmployeesById
// const getEmployeesById = (req, res) => {
//     // SELECT USER BY ID
//   let sql = "SELECT * FROM employees WHERE emp_no = ?"

//   sql = mysql.format(sql, [(req.params.emp_no)]);

//   pool.query("SELECT * FROM employees WHERE emp_no = ?", (err, rows) => {
//     if (err)  return res.status(500).send('An unexpected error occurred');
//     return res.json(rows);
//   })
// }

// getEmployeesByFirstName

const getEmployeesByFirstName = (req,res) => {
    // let first_name = req.params.first_name;
    let sql = "SELECT * FROM employees WHERE first_name = ?"

    sql = mysql.format(sql, [req.params.first_name]);

    pool.query(sql, (err, rows) => {
        if (err)  return res.status(500).send('An unexpected error occurred');
        return res.json(rows);
        
    })
}

// Move the logic (everything after the route path) from the employees router into these functions

module.exports = { 
  getEmployees,
  // getEmployeesById
  getEmployeesByFirstName 
}

// Import these functions back into the employees router and use them router.get('/:id', controller.getEmployeesById)

// Everything should have stayed the same. If you navigate to http://localhost:4001/employees/5 you should see the text "getting employees...""