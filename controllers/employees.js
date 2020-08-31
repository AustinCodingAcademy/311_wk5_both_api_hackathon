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
    let sql = 'SELECT * FROM employees WHERE employees.emp_no = ?;'
    sql = mysql.format(sql, [req.params.id])
    console.log(sql)
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}
// const getEmployeesByFirstName = (req, res)

 module.exports = {
     getEmployees,
     getEmployeeById,
    //  getEmployeesByFirstName
 }
