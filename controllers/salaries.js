const mysql = require('mysql')
const pool = require('../mysql/connections')
const handleSQLError = require("../mysql/error")

const getSalary = (req, res) => {

    // Logic to access data here, similar to 'employees'

    // pool.query('SELECT * FROM employees LIMIT 50', (err, rows) => {
    //     if (err) return handleSQLError(res, err)
    //     return res.json(rows);
    // })
}

const getSalaryById = (req, res) => {

    // Logic to access data here, similar to 'employees'

    // let sql = 'SELECT * FROM ?? WHERE ?? = ?'
    // const replacements = ["employees", "emp_no", req.params.emp_no]
    // sql = mysql.format(sql, replacements)

    // pool.query(sql, (err, rows) => {
    //     if (err) return handleSQLError(res, err)
    //     return res.json(rows);
    // })
}

const getSalaryByFirstName = (req, res) => {

    // Logic to access data here, similar to 'employees'

    // let sql = 'SELECT * FROM ?? WHERE ?? = ?'
    // const replacements = ["employees", "first_name", req.params.first_name]
    // sql = mysql.format(sql, replacements)

    // pool.query(sql, (err, rows) => {
    //     if (err) return handleSQLError(res, err)
    //     return res.json(rows);
    // })
}

module.exports = {
    getSalary,
    getSalaryById,
    getSalaryByFirstName
}