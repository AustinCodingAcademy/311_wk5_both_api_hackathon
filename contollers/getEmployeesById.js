const employeeId = require('');

function getEmployeesById(request,response) {
  return response.json(employeeId);
}


module.exports = {getEmployeesById};