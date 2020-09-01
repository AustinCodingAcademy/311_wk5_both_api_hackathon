const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

const getEmployees = (req, res) => {
    let sql = `SELECT * FROM employees; `
    sql = mysql.format(sql, [])
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

module.exports = {
    getEmployees
}
