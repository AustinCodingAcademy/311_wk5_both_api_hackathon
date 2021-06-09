const mysql = require('mysql');
const pool = require('../mysql/connection');



function getAllDepartments(req, res) {
let sql = 'SELECT * FROM employees.departments';

pool.query(sql, (err, rows) => {
    if (err) {
        return err + 'Something went wrong'
    } return res.json(rows);
}) 
}

function getEmployeeDepartment(req, res) {
    let sql = 'SELECT dept_name FROM employees.departments WHERE dept_no = (SELECT dept_no FROM dept_emp where emp_no = ?)'

    sql = mysql.format(sql, [req.params.id])

    pool.query(sql, (err, rows) => {
        if (err) {
            return err + 'Something went wrong'
        } return res.json(rows)

    })

}

module.exports = {getAllDepartments, getEmployeeDepartment}