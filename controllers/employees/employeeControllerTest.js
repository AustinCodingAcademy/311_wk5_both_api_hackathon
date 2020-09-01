const soonToBeDeprecatedPath = require('./update')
const employeesController = require('../employees')


let mockResponse = {
  json: (body) => {
    console.log(body);
    return mockResponse;
  },
  send: (body) => {
    console.log(body);
    return mockResponse;
  },
  status: (code) => {
    console.log(code);
    return mockResponse;
  },
};

let mockRequest = {
    params: { emp_no: 10150 },
    body: { birth_date: '1992-04-22', first_name: "bogus", last_name: "user", gender: 'm', hire_date: '2014-03-11' }
}

// use these to test while routes are under construction

// employeesController.getEmployees(mockRequest,mockResponse)
// employeesController.getEmployeeById(mockRequest,mockResponse)
// employeesController.getEmployeeByFirstName(mockRequest,mockResponse)
soonToBeDeprecatedPath.updateEmployee(mockRequest,mockResponse)

// for later
// employeesController.createUser(mockRequest,mockResponse)
// employeesController.deleteUserByFirstName(mockRequest,mockResponse)