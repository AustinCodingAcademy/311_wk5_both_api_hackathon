const mysql = require('mysql');
const pool = require('../sql/connection');
const {handleSQLError} = require('../sql/error');


// Selects all users from the DB
const getEmployees = (req, res) => {
    pool.query('SELECT * FROM employees limit 100', (err, rows) => {
        if(err) return handleSQLError(res, err);
        return res.json(rows);
    });
    
}

// Selects employee by employee number from the DB
const getEmployeesById = (req, res) => {
    let sql = 'SELECT * FROM employees WHERE emp_no = ?';
    sql = mysql.format(sql, [req.params.emp_no])

    pool.query(sql, (err, rows) => {
        if(err) return handleSQLError(res, err);
        return res.json(rows);
    });
}

// Gets employees by first name
const getEmployeesByFirstName = (req, res) => {
    let sql = 'SELECT * FROM employees WHERE ?? = ? limit 10';
    let replace = ['first_name', req.params.first_name]
    sql = mysql.format(sql, replace);

    pool.query(sql, (err, rows) => {
        if(err) return handleSQLError(res, err);
        return res.json(rows);
    });
}

//Return the employee by id with salary information
//There should be a property on the employee object called salary with a number value
const getEmployeesSalary = (req, res) => {
    let sql = 'SELECT salaries FROM employees WHERE emp_no = ? limit 10';
    let replace = [req.params.emp_no]
    sql = mysql.format(sql, replace);
    
    pool.query(sql, (err, rows) => {
        if(err) return handleSQLError(res, err);
        return res.json(rows);
    });
}

//Return the employee with department information
//There should be a property on the employee object called departments that is an array
const getEmployeesDepartment = (req,res) => {
    let sql = 'SELECT * FROM employees WHERE ?? = ? limit 10'; 
    let replace = [req.params.department]
    sql = mysql.format(sql, replace);
    
    pool.query(sql, (err, rows) => {
        if(err) return handleSQLError(res, err);
        return res.json(rows);
    });
}
module.exports = {
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName,
    getEmployeesSalary,
    getEmployeesDepartment,
    getOneSalaryById
}
