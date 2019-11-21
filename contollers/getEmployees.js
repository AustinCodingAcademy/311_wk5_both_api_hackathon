const employees = require('');

function getEmployees(request,response) {
  return response.json(employees);
}


module.exports = {getEmployees};