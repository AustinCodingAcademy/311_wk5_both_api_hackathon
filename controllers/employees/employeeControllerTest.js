const updateEmployeesController = require('./update')
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
    params: { emp_no: 10050}
}
//   params: { emp_no: 10233 },
//   body: { birth_date: '1992-04-22', first_name: "bogus", last_name: "user", gender: 'm', hire_date: '2014-03-11' },
// };

//UNCOMMENT WHATEVER YOU ARE TRYING TO TEST
// userController.getAllUsers(mockRequest,mockResponse);
employeesController.getEmployeeById(mockRequest,mockResponse);
//userController.createUser(mockRequest,mockResponse);
// updateEmployeesController.updateEmployee(mockRequest,mockResponse);
//userController.deleteUserByFirstName(mockRequest,mockResponse);