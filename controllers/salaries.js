const { response } = require('express')
const mysql = require('mysql')
const pool = require('../mysql/connection')

const getSalariesById = (req,res) => {
    // SELECT USER BY ID
  let sql = "SELECT * FROM salaries WHERE emp_no = ? LIMIT 50"

  sql = mysql.format(sql, [(req.params.emp_no)]);

  pool.query(sql, (err, results) => {
    if (err || results.length <= 0) {return res.status(500).send('An unexpected error occurred')
    } else {
      return res.json(results);
    }
  })
}

const getSalariesByAmount = (req,res) => {
    let sql = "SELECT * FROM salaries WHERE salary > ? LIMIT 50"

    sql = mysql.format(sql, [req.params.salary]);

    pool.query(sql, (err, rows) => {
      if (err || results.length <= 0) {return res.status(500).send('An unexpected error occurred')
    } else {
      return res.json(results);
    }
  })
}

module.exports = { 
    getSalariesById,
    getSalariesByAmount
  }