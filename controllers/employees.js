
const mysql = require("mysql");
const pool = require("../mySQL/connections");
const { handleSQLError } = require("../mySQL/error");

const getEmployees = (req, res) => {
  // SELECT ALL USERS
  console.log("REGEX SUCKS")
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

// const getEmployeesById = (req, res) => {
//   const id = req.params.id;
//   const user = users.filter(user => user.id=== id); 
//   console.log(user)
//   // pool.query("UPDATE * FROM employees", (err, rows) => {
//   //   if (err) return handleSQLError(res, err);
//   //   return res.json(rows);
//   // });
// };
//const controllers = express.controllers();

module.exports = {
  getEmployees
  //getEmployeesById
  // getEmployeesByFirstName,
  // getEmployeesSalary,
  // getEmployeesDepartment,
  // getOneSalaryById
};
