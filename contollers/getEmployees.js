const mysql = require('../node_modules/mysql')

var con = mysql.createConnection({
  host: "35.223.66.40",
  user: "root",
  password: "coding",
  database: "admin"
});

    // function getEmployees(request,response) {
      // return response.json(employees);
        // }
        
        
// getEmployees first 50 users
const getEmployees = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(res);
  })
}


module.exports = {getEmployees};