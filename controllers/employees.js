const mysql = require('mysql');
const pool = require('../mySQL/connection')

const getEmployees = (req, res) => {
  let sql = "SELECT * FROM ?? LIMIT ?";
  let replacements = [ 'employees', 50 ];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows) => {
    if (err) return res.status(500).send('something went wrong');
    return res.json(rows);
})
}

const getEmployeesById = (req, res) => {
    let sql = "SELECT * FROM ?? WHERE ?? = ?"
    let replacements = ['employees', 'emp_no', req.params.id]
    sql = mysql.format(sql, replacements)

    pool.query(sql, (err, rows) => {
      if (err) return res.status(500).send('something went wrong');
      return res.json(rows);
  })
}

const getEmployeesByFirstName = (req, res) => {
    let sql = "SELECT * FROM ?? WHERE ?? = ?"
    let replacements = ['employees', 'first_name', req.params.first_name]
    sql = mysql.format(sql, replacements)

    pool.query(sql, (err, rows) => {
      if (err) return res.status(500).send('something went wrong');
      return res.json(rows);
  })

}

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };