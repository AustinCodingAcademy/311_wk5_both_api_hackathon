const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


const deleteSalary = (req, res) => {
      let sql = 'DELETE FROM salaries WHERE emp_no = ?;';
    sql = mysql.format(sql, [req.params.emp_no])
    console.log(sql)
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
 }

 module.exports = {
     deleteSalary
}
