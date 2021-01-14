const { response } = require('express')
const mysql = require('mysql')
const pool = require('../mysql/connection')

const getDepartmentsByName = (req,res) => {
  let sql = "SELECT * FROM departments WHERE dept_name = ? LIMIT 50"

  sql = mysql.format(sql, [(req.params.dept_name)]);

  pool.query(sql, (err, rows) => {
    if (err)  return res.status(500).send('An unexpected error occurred');
    return res.json(rows);
  })
}


module.exports = { 
    getDepartmentsByName
  }