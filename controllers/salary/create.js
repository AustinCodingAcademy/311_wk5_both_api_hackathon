const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')


const createSalary = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME 
  let sql = "INSERT INTO salaries (emp_no, salary, from_date, to_date)VALUES(?, ?, ?, ?);"
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [req.params.emp_no, req.body.salary, req.body.from_date, req.body.to_date])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}






module.exports = {
     createSalary
}