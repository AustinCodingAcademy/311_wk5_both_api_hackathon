const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');


const getDepartments = (req, res) => {
    let sql = "SELECT ?? FROM ??"
    sql = mysql.format(sql, ['*', 'departments'])
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }
  

module.exports = { getDepartments };