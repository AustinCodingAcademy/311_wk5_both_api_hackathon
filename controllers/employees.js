const mysql = require('mysql')
const { handleSQLError } = require('../../311_wk4_day2_node_mysql/sql/error');
const pool = require('../mysql/connection')


function getEmployees(req, res) {
    pool.query('select * from employees order by emp_no desc limit 50', (err, rows) => {
        if (err) {
            return 'error occured!'
        } return res.json(rows);
    })
}

function getEmployeeById(req, res) {
    console.log(req.params);
    let employeeID = req.params.id;
    let sql = 'select * from employees where emp_no = ?'

    sql = mysql.format(sql, [employeeID])

    pool.query(sql, (err, rows) => {
        if(err) {
            return err + 'error occured!'
        } return res.json(rows)
    })
    

}

function getEmployeesByFirstName(req, res) {
console.log(req.params)
let firstName = req.params.firstname;
let sql = 'select * from employees where first_name = ?'

sql = mysql.format(sql, [firstName])

pool.query(sql, (err, rows) => {
    if(err) {
        return err + 'error occured!'
    } return res.json(rows)
})
}


module.exports = {getEmployees, getEmployeeById, getEmployeesByFirstName};