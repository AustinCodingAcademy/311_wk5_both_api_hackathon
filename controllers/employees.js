const pool = require("../mysql/connections")


const getEmployees = (req, res) => {
    pool.query('SELECT * FROM employees LIMIT 1000', (err, rows) => {
      return res.json(rows);
  })
}

let getEmployeeByID = (req, res) => {
    let id = req.params.id
    let sql = 'SELECT * FROM employees WHERE id = ?'
    sql = mysql.format(sql, [id])

    pool.query(sql, (err, rows) => {
        return res.json(rows)
    })
}

module.exports = { getEmployees, getEmployeeByID }