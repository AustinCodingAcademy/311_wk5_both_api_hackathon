const mysql = require("mysql");
const pool = require("../mysql/connections");
const { handleSQLError } = require("../mysql/error");


const getEmployeesSalariesFirstName = (req, res) => {
  console.log('dirty durden')
  let sql = "SELECT ??, ??, ?? FROM ?? JOIN ?? WHERE ?? = ?"
  sql = mysql.format(sql, ["employees.first_name", "employees.last_name", "salaries.salary", "employees", "salaries", "employees.first_name", req.params.firstname])
  console.log(sql)

  pool.query(sql, (err, rows) => {
    console.log('query function working?')
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}


module.exports = { getEmployeesSalariesFirstName };


// const testFunction = (req, res) => {
//   console.log('blah')
//   res.send('hii')
// }

// module.exports = {testFunction}