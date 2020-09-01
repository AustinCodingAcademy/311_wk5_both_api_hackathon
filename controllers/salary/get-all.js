const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getSalaries = (req, res) => {
    let sql = `SELECT * FROM salaries; `
    sql = mysql.format(sql, [])
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

module.exports = {
     getSalaries
 }