const mysql = require('mysql')
const pool = require('../mysql/connection.js')

const handleSQLError = (res, err) => {
  console.log('SQL Error: ', err)
  return res.status(500).send('An unexpected error occurred');
}

const getTitles = (req, res) => {
  pool.query("SELECT * FROM titles limit 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getTitlesbyId = (req, res) =>{
  let sql = "select employees.first_name, employees.last_name, employees.emp_no, titles.title from employees join titles where employees.emp_no = titles.emp_no having ?? = ?"
  const replacements = ['employees.emp_no', req.params.id]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}
module.exports = {getTitles, getTitlesbyId}