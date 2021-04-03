const { response } = require('express')
const mysql = require('mysql')
const pool = require('../mysql/connection')

// Create the following functions 


const getEmployees = (req, res) => {
    pool.query("SELECT * FROM employees LIMIT 50", (err, results) => {
      if (err || results.length <= 0) {return res.status(500).send('An unexpected error occurred')
    } else {
      return res.json(results);
    }
  })
}

const getEmployeesById = (req, res) => {
    // SELECT USER BY ID
  let sql = "SELECT * FROM employees WHERE emp_no = ? LIMIT 50"

  sql = mysql.format(sql, [(req.params.emp_no)]);

  pool.query(sql, (err, results) => {
    if (err || results.length <= 0) {return res.status(500).send('An unexpected error occurred')
    } else {
      return res.json(results);
    }
  })
}

const getEmployeesByFirstName = (req,res) => {
    let sql = "SELECT * FROM employees WHERE first_name = ? LIMIT 50"

    sql = mysql.format(sql, [req.params.first_name]);

    pool.query(sql, (err, results) => {
      if (err || results.length <= 0) {return res.status(500).send('An unexpected error occurred')
    } else {
      return res.json(results);
    }
  })
}

// Move the logic (everything after the route path) from the employees router into these functions

module.exports = { 
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName 
}

// Import these functions back into the employees router and use them router.get('/:id', controller.getEmployeesById)

// Everything should have stayed the same. If you navigate to http://localhost:4001/employees/5 you should see the text "getting employees...""