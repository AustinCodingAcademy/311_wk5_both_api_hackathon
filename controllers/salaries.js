const mysql = require('mysql');
const pool = require('../mysql/connection.js')


function getUserIdSalary(req, res) {
    let sql = 'SELECT salary, from_date, to_date from employees.salaries where emp_no = ?'

    sql = mysql.format(sql, [req.params.id])

    pool.query(sql, (err, rows) => {
        if (err) {
            return err + 'Looks like youve got yourself an oopsie there bud'
        } return res.json(rows);
    })
}

function getMaxSalary(req, res) {
    let sql = 'SELECT s.salary, e.first_name, e.last_name FROM employees.salaries s JOIN employees.employees e ON s.emp_no = e.emp_no ORDER BY salary desc limit 1';

    pool.query(sql, (err, rows) => {
        if(err) {
            return err + 'Ya done hecked up A-A-Ron'
        } return res.json(rows)
    })

}

module.exports = {getUserIdSalary, getMaxSalary};