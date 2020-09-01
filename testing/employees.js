
const deleteEmployeeCTR = require('../controllers/employees/deleteEmployee')
const getEmployeesCTR = require('../controllers/employees/getEmployees')
const getEmployeeByIdCTR = require('../controllers/employees/getEmployeeById')
const getEmployeeByFirstNameCTR = require('../controllers/employees/getEmployeeByFirstName')
const updateEmployeeCTR = require('../controllers/employees/updateEmployee')


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
    params: { emp_no: 11005 },
    // body: { birth_date: '1992-04-22', first_name: "bogus", last_name: "user", gender: 'm', hire_date: '2014-03-11' }
}

// use these to test while routes are under construction

// getEmployeesCTR.getEmployees(mockRequest,mockResponse)
getEmployeeByIdCTR.getEmployeeById(mockRequest,mockResponse)
// getEmployeeByFirstNameCTR.getEmployeeByFirstName(mockRequest,mockResponse)
// updateEmployeeCTR.updateEmployee(mockRequest,mockResponse)

// for later
// createUserCTR.createUser(mockRequest,mockResponse)
// deleteEmployeeCTR.deleteEmployee(mockRequest,mockResponse)