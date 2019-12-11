// function getEmployeesByFirstName(request,response) {
//   return response.json(firstName);
// }
const mysql = require('../node_modules/mysql')


const getEmployeesByFirstName = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let sql = "SELECT * FROM employees WHERE id = ?"
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [req.params.id])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(firstName);
  })
}


module.exports = {getEmployeesByFirstName};