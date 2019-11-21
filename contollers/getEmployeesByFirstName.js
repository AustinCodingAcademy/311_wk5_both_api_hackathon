const firstName = require('');

function getEmployeesByFirstName(request,response) {
  return response.json(firstName);
}


module.exports = {getEmployeesByFirstName};