const mysql = require('mysql')
const pool = require('../mysql/connections')
const { handleSQLError } = require('../mysql/error')

const titlesByEmpId = (req, res) => {
    let sql = "SELECT ??, ??, ?? FROM ?? JOIN ?? WHERE ?? = ?? AND ?? = ?"
    sql = mysql.format(sql, ['employees.first_name', 'employees.last_name', 'titles.title', 'employees', 'titles', 'employees.emp_no', 'titles.emp_no', 'employees.emp_no', req.params.id])

    pool.query(sql, (err,rows) => {
        if (err) return handleSQLError (res, err)
        return res.json(rows)
    })
}

module.exports = { titlesByEmpId };