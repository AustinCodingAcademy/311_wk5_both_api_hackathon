const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/errors')

const getEmployeesById = function show(req, res) {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let sql = "SELECT ?? FROM ?? WHERE ?? = ?"
  
  sql = mysql.format(sql, ['*', 'employees', 'emp_no', req.params.id])
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

module.exports = {getEmployeesById}