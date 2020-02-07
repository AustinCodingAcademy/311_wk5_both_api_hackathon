const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/errors')

const getDepartmentByName = (req, res) => {
  let sql = "SELECT ?? FROM ?? WHERE ?? = ?"
   
  sql = mysql.format(sql, ['*', 'departments', 'dept_name', req.params.dept_name])
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}  
  
module.exports = {getDepartmentByName}