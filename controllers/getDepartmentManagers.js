const mysql = require('mysql')
const db = require('../mysql/connection')
const sqlErrorHandler = require("../mysql/error");

const getDepartmentManagers = (req, res) => {
  let sql = "select ??, ??, ??, ?? from ?? left join (??, ??) on ?? = ?? and ?? = ?? where date_format(??, '%Y')= ? order by ?? asc"
  let replacements = ['departments.dept_name', 'employees.first_name', 'employees.last_name', 'dept_manager.from_date', 'dept_manager', 'departments', 'employees', 'dept_manager.dept_no', 'departments.dept_no', 'dept_manager.emp_no', 'employees.emp_no', 'to_date', '9999', 'dept_name'];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
}
module.exports = getDepartmentManagers;
