const mysql = require('../node_modules/mysql')


    // function getEmployees(request,response) {
      // return response.json(employees);
        // }
        
        
// getEmployees first 50 users
const getEmployees = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(employees);
  })
}


module.exports = {getEmployees};