const mysql = require('../node_modules/mysql')
// const employees = require('../node_modules/mysql/');


var con = mysql.createConnection({
  host: "35.223.66.40",
  user: "root",
  password: "coding",
  database: "admin"
});


// getEmployees
con.connect(function(err) {
  if (err) throw err;
  con.query("select * from employees where emp_no < 10051", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

// function getEmployees(request,response) {
//   // let allEmployees = 
//   return response.json(employees);
// }


module.exports = {getEmployees};