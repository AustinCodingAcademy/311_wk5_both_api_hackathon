const mysql = require('mysql');
const pool = require("../mysql/connections");
const { handleSQLError } = require('../mysql/errors');

const getDepartments = (req,res) => {
    
    pool.query("SELECT * FROM departments LIMIT 50", (err, rows) => {
        //the following is assuming there is a function to handle errors named handleSQLErrors
        if (err) return handleSQLError(res,err)
            return res.json(rows);
    })
}

const getDepartmentsById = (req,res) => {
    //select the employees by ID
    let id = req.params.id;
    let sql ="SELECT * FROM departments WHERE dept_no = ?";
    sql = mysql.format(sql, [id]);

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res,err)
        return res.json(rows);
    })
}

const getDepartmentManagers = (req,res) => {
    let department_managers = req.params.first_name;
    let sql = "select * from dept_manager join employees on employees.emp_no = dept_manager.emp_no join departments on departments.dept_no = dept_manager.dept_no"

    sql = mysql.format(sql, [department_managers]);

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res,err)
        return res.json(rows);
    })
}

module.exports = { getDepartments, getDepartmentsById, getDepartmentManagers }