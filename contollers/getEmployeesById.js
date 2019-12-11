<<<<<<< HEAD
function getEmployeesById(request,response) {
  return response.json(employeeId);
}
=======
var con = mysql.createConnection({
  host: "35.223.66.40",
  user: "root",
  password: "coding",
  database: "admin"
});

// getEmployeesByid
con.connect(function(err) {
  if (err) throw err;
  con.query("select * from employees where emp_no < 10051", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
>>>>>>> 6cfdda4963ab3bf5e6f85e12ef7c8d9ea887e1d0

// function getEmployees(request,response) {
//   // let allEmployees = 
//   return response.json(employees);
// }

module.exports = {getEmployeesById};