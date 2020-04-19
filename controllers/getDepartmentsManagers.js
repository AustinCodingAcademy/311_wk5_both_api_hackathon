const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');


const getDepartmentsManagers = (req, res) => {
    let sql = "SELECT ??, ??, ??, ??, ??, ?? FROM ?? JOIN ?? ON ?? = ??"
    sql = mysql.format(sql, ['dept_manager.emp_no','dept_manager.dept_no', 'dept_manager.from_date', 'dept_manager.to_date', 'departments.dept_no', 'departments.dept_name', 'dept_manager', 'departments', 'dept_manager.dept_no', 'departments.dept_no'])

    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
      })
    }
  
  
module.exports = { getDepartmentsManagers };



