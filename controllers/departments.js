const mysql = require("mysql");
const pool = require("../mysql/connection");
const sqlErrorHandler = require("../mysql/error");

const getDepartments = (req, res) => {
  let sql = "SELECT * FROM ??";
  let replacements = ["employees.departments"];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
};

const employeesPerDepartment = (req, res) => {
  let sql = "SELECT count(*) AS ??, ?? FROM ?? JOIN ?? WHERE ?? = ?? GROUP BY ??";
  let replacements = [
    "employees",
    "dept_name",
    "employees.dept_emp",
    "employees.departments",
    "employees.dept_emp.dept_no",
    "employees.departments.dept_no",
    "dept_name"
  ];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
};

const getDepartmentManagers = (req, res) => {
  let sql = "SELECT ??, ?? FROM ?? JOIN ?? ON ?? = ?? JOIN ?? ON ?? = ??";
  let replacements = [
    "first_name",
    "dept_name",
    "employees.employees",
    "employees.dept_manager",
    "employees.employees.emp_no",
    "employees.dept_manager.emp_no",
    "employees.departments",
    "employees.dept_manager.dept_no",
    "employees.departments.dept_no"
  ];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
};

module.exports = {
  getDepartments,
  employeesPerDepartment,
  getDepartmentManagers
};
