const { response } = require('express')
const mysql = require('mysql')
const pool = require('../mysql/connection')

const getSalariesById = (req,res) => {
    // SELECT USER BY ID
  let sql = "SELECT * FROM salaries WHERE emp_no = ? LIMIT 50"

  sql = mysql.format(sql, [(req.params.emp_no)]);

  pool.query(sql, (err, rows) => {
    if (err)  return res.status(500).send('An unexpected error occurred');
    return res.json(rows);
  })
}

const getSalariesByAmount = (req,res) => {
    let sql = "SELECT * FROM salaries WHERE salary > ? LIMIT 50"

    sql = mysql.format(sql, [req.params.salary]);

    pool.query(sql, (err, rows) => {
        if (err)  return res.status(500).send('An unexpected error occurred');
        return res.json(rows);
    })
}

module.exports = { 
    getSalariesById,
    getSalariesByAmount
  }