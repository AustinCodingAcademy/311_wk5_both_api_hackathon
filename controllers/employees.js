const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};
const getEmployeesById = (req,res) => {
  let sql = 'SELECT * FROM ?? WHERE ?? = ?';
  const replacements = ['employees', 'emp_no', req.params.emp_no]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};

const getEmployeesByFirstName = (req, res) => {
  let sql = 'SELECT * FROM ?? WHERE ?? = ?';
  const replacements = ['employees', 'first_name', req.params.first_name]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};







module.exports = { getEmployees,getEmployeesById, getEmployeesByFirstName }