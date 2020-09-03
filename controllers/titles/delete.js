// const mysql = require('mysql')
// const pool = require("../../sql/connection")
// const { handleSQLError } = require('../../sql/error')

// const deleteTitle = (req, res) => {
//   let sql = "*** ADD SQL SYNTAX ***"
//   sql = mysql.format(sql, [])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ message: `Deleted ${results.affectedRows} title` });
//   })
// }

// module.exports = {
//   deleteTitle
// }