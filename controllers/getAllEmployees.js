const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../sql/error')

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM users LIMIT 50", (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

// exports.getEmployeesById = function show(req, res) {
//   const found = employees.some(employees => employees.id === parseInt(req.params.id));

//   if (found) {
//     res.json(employees.find(employees => employees.id === parseInt(req.params.id))); 
//   } else {
//     res.status(404).json({ msg: `No employee with the id of ${req.params.id}`});
//   }
// }


module.exports = {getEmployees}