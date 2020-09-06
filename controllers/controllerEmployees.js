//controllers/controllerEmployees.js
const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');


const getAllEmployees = (req, res) => {
    pool.query("SELECT * FROM employees limit 50", (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    });
};

const getEmployeeById = (req, res) => {
    let sql = `select ??, ??, ??, ??, ??, ?? from ?? where ??=${req.params.id}`;
    let replacements = ['emp_no', 'birth_date', 'first_name', 'last_name', 'gender', 'hire_date', 'employees', 'emp_no'];
    sql = mysql.format(sql, replacements);
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    });
};

const getEmployeeByFirstName = (req, res) => {
    let sql = `select ??, ??, ??, ??, ??, ?? from ?? where ??='${req.params.first_name}'`;
    let replacements = ['emp_no', 'birth_date', 'first_name', 'last_name', 'gender', 'hire_date', 'employees', 'first_name'];
    sql = mysql.format(sql, replacements);
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    });
};

module.exports = {
    getEmployeeByFirstName,
    getAllEmployees,
    getEmployeeById

};