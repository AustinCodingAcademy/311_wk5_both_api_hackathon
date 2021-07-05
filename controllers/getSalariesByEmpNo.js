const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/errors')

const getSalariesById = (req, res) => {
  let sql = "SELECT ?? FROM ?? WHERE ?? = ?"
   
  sql = mysql.format(sql, ['*', 'salaries', 'emp_no', req.params.id])
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}
  
module.exports = {getSalariesById}