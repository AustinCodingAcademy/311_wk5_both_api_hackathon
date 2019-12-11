// function getEmployeesById(request,response) {
//   return response.json(employeeId);
// }
const mysql = require('../node_modules/mysql')



const getEmployeesById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let sql = "SELECT * FROM users WHERE id = ?"
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [req.params.id])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(employeeId);
  })
}
module.exports = {getEmployeesById};