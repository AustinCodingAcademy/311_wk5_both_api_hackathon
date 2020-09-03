// const mysql = require('mysql')
// const pool = require("../../sql/connection")
// const { handleSQLError } = require('../../sql/error')

// const updateTitle = (req, res) => {
//   let sql = "*** ADD SQL SYNTAX ***"
//   sql = mysql.format(sql, [])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }

// module.exports = {
//   updateTitle
// }