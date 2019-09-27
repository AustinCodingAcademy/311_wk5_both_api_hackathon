const mysql = require('mysql')
// const employeesControllers = require('./employees')
const pool = require('../mysql/connection')

const getEmployeesByFirstName = (req, res) => {
    let sql = "SELECT * FROM ?? WHERE ?? = ?"
    let replacements = ['employees', 'first_name', req.body.first_name]
    sql = mysql.format(sql, replacements)
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
}

module.exports = { getEmployeesByFirstName };