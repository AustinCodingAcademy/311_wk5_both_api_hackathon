const mysql = require('mysql')
const pool = require('../mysql/connection')
const handleSQLError = require('../mysql/errors')

const singleSalaryById = (req, res) => {
  let sql = 'SELECT emp_no, salary FROM ?? where ?? = ?';
  const replacements = ["employees.salaries", "emp_no", req.params.id]
  sql = mysql.format(sql, replacements)

  //alt sql syntax
  //let sql = `SELECT * FROM employees WHERE emp_no = ${req.params.id}`

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json(results)
  })
}

module.exports = {singleSalaryById}