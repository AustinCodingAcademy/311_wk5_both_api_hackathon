const mysql = require('mysql')
const db = require('../mysql/connection')
const sqlErrorHandler = require("../mysql/error");

const getDepartmentEmployeeCount = (req, res) => {
  let sql = "select ??, count(??) as ?? from ?? left join ?? on ?? = ?? group by ??";
  let replacements = ['departments.dept_name', 'dept_emp.dept_no', 'total_employees', 'dept_emp', 'departments', 'departments.dept_no', 'dept_emp.dept_no', 'departments.dept_name'];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) return sqlErrorHandler(res, err);
    return res.json(results);
  });
}
module.exports = getDepartmentEmployeeCount;
