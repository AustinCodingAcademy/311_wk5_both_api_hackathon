const mysql = require('mysql')
const pool = require('../mysql/connection')
const handleSQLError = require('../mysql/errors')


const getDept = (req, res) => {
  let sql = 'SELECT * FROM departments'

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results)
  })
}


const getDeptEmpById = (req, res) => {
  let sql = `SELECT e.*
              , de.dept_no
              , d.dept_name
              , de.from_date
              , de.to_date
              , dm.emp_no as mgr_emp_no
              , em.first_name as mgr_first_name
              , em.last_name as mgr_last_name
              , em.gender as mgr_gender
              , em.birth_date as mgr_birth_date
              , dm.from_date as mgr_from_date
              , dm.to_date as mgr_to_date
              , em.hire_date as mgr_hire_date
          FROM employees e
          LEFT JOIN dept_emp de using(emp_no)
          LEFT JOIN departments d using (dept_no)
          LEFT JOIN dept_manager dm on de.dept_no = dm.dept_no
          LEFT JOIN employees em on em.emp_no = dm.emp_no
          WHERE e.emp_no = ?`
  const replacements = [req.params.id]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
   return res.json(results)
    
  })
}

module.exports = { getDept, getDeptEmpById }