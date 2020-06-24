const mysql = require('mysql')
// const pool = require('../sql/connection')


const getEmployeesById = (req, res) => {
  let sql = "SELECT * FROM users WHERE id = ?"

  const id = req.params.id
  sql = mysql.format(sql, [id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports {getEmployeesById}