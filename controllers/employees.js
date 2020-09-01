const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


const getEmployees = (req, res) => {
    let sql = `SELECT * FROM employees; `
    sql = mysql.format(sql, [])
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

const getEmployeeById = (req, res) => {
    let sql = 'SELECT * FROM employees WHERE employees.?;'
    sql = mysql.format(sql, [req.params])
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

const getEmployeeByFirstName = (req, res) => {
    let sql = 'SELECT * FROM employees WHERE employees.first_name = ?;'
    sql = mysql.format(sql, [req.params.first_name])
    console.log(sql)
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

module.exports = {
    getEmployees,
    getEmployeeById,
    getEmployeeByFirstName
}
