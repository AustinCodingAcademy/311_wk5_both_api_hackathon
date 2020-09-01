const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')


const getDepartments = (req, res) => {
    let sql = ` SELECT *
                FROM departments`
    sql = mysql.format(sql, [])
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

module.exports = {
  getDepartments 
}