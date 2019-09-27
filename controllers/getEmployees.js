const mysql = require('mysql')
// const employeesControllers = require('./employees')
const pool = require('../mysql/connection')

const getEmployees = (req, res) => {
    let sql = "SELECT * FROM ?";
    let replacements = ['employees'];
    sql = mysql.format(sql, replacements);

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

module.exports = {}