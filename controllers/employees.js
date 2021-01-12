const mysql = require('mysql')
const pool = require('../mysql/connection')

// Create the following functions 

// getEmployees
// const getEmployees = (req, res) => {
//     pool.query(`SELECT * FROM employees LIMIT 100`, 
//       (err, rows) => {
//       if (err) return 
      
//     })
//   }

const getEmployees = (req, res) => {
    res.send("getting employees...")
} 

// getEmployeesById
const getEmployeesById = (req, res) => {
    // SELECT USER BY ID
  let sql = "SELECT * FROM employees WHERE emp_no = ?"

  sql = mysql.format(sql, [req.params['emp_no']])

  pool.query(sql, (err, rows) => {
    return res.json(rows);
  })
}

// getEmployeesByFirstName

const getEmployeesByFirstName = (req,res) => {
    let first_name = req.params.first_name;
    let sql = "SELECT * FROM employees WHERE first_name = ?"

    sql = mysql.format(sql, [first_name]);

    pool.query(sql, (err, results) => {
        if (err) return 
        
    })
}

// Move the logic (everything after the route path) from the employees router into these functions

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }

// Import these functions back into the employees router and use them router.get('/:id', controller.getEmployeesById)

// Everything should have stayed the same. If you navigate to http://localhost:4001/employees/5 you should see the text "getting employees..."