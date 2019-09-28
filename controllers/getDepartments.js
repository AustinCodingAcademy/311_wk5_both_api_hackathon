const mysql = require('mysql')
const pool = require('../mysql/connections')
const { handleSQLError } = require('../mysql/error')

const getAllDepartments = (req, res) => {
    let sql = "SELECT ?? FROM ??"
    sql = mysql.format(sql, ["dept_name", "departments"])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows)
    })
}

module.exports = { getAllDepartments }