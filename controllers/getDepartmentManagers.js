const mysql = require('mysql')
const db = require('../mysql/connection')
const sqlErrorHandler = require("../mysql/error");

const getDepartmentManagers = (req, res) => {
  let sql = "select ?? as ??, concat(??, ' ', ??) as ??, date_format(??, '%M %e, %Y') as ?? from ?? left join (??, ??) on ?? = ?? and ?? = ?? where date_format(??, '%Y')= ? order by ?? asc"
  let replacements = ['departments.dept_name', 'managerOf', 'employees.first_name', 'employees.last_name', 'full_name', 'dept_manager.from_date', 'since', 'dept_manager', 'departments', 'employees', 'dept_manager.dept_no', 'departments.dept_no', 'dept_manager.emp_no', 'employees.emp_no', 'to_date', '9999', 'managerOf'];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.status(204).json(results);
  });
}
module.exports = getDepartmentManagers;
