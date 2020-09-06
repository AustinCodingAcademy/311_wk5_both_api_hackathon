const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')


const getTitles = (req, res) => {
    let sql = "SELECT * FROM titles"
    sql = mysql.format(sql, [])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

module.exports = {
  getTitles
}