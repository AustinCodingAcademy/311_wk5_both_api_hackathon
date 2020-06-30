const mysql = require('mysql');
const pool = require("../mysql/connections")


const getEmployees = (req, res) => {
    pool.query('SELECT * FROM employees LIMIT 1000', (err, rows) => {
      if (err) {
        res.status(500).send("An error occured");
      }
      return res.json(rows);
  })
}

let getEmployeeByID = (req, res) => {
    let id = req.params.id
    let sql = 'SELECT * FROM employees WHERE emp_no = ?'
    sql = mysql.format(sql, [id])

    pool.query(sql, (err, rows) => {
        return res.json(rows)
    })
}

const getEmployeeByFirstName = (req, res) => {
    let name = req.params.first_name;
    let sql = 'SELECT * FROM employees WHERE first_name = ? LIMIT 1000'
    sql = mysql.format(sql, [name]);

    pool.query(sql, (err, rows) => {
        return res.json(rows);
    });
}

module.exports = { getEmployees, getEmployeeByID, getEmployeeByFirstName }