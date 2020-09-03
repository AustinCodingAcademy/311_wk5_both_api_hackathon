
const deleteEmployeeController = require('../controllers/employees/delete')
const getEmployeesController = require('../controllers/employees/getAll')
const getEmployeeByIdController = require('../controllers/employees/getById')
const updateEmployeeController = require('../controllers/employees/update')
const createEmployeeController = require('../controllers/employees/create')
// const getEmployeeByFirstNameController = require('../controllers/employees/getByFirstName')
// TODO: Do we need ByFirstName function? Not sure why we would ever use this function as we can have multiple michaels but never want to treat them all the same. (treat meaning update, delete, create etc.)


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

// getEmployeesController.getEmployees(mockRequest,mockResponse)
getEmployeeByIdController.getEmployeeById(mockRequest,mockResponse)
// getEmployeeByFirstNameController.getEmployeeByFirstName(mockRequest,mockResponse)
// updateEmployeeController.updateEmployee(mockRequest,mockResponse)

// for later
// createEmployeeController.createUser(mockRequest,mockResponse)
// deleteEmployeeController.deleteEmployee(mockRequest,mockResponse)