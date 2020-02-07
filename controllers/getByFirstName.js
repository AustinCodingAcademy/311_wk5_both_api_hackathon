const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/errors')

const getEmployeesByFirstName = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?"

  const replacements = ['employees', 'first_name', req.params.first_name]

  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
})
}


module.exports = {getEmployeesByFirstName}