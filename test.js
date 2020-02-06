let employeesController = require("./controllers/employees");

let mockResponse = {
    json:(body)=>{
        console.log(body);
        return mockResponse;
    },
    send:(body)=>{
        console.log(body)
        return mockResponse;
    },
    status: (code)=>{
        console.log(code)
        return mockResponse;
    }
}
let mockRequest = {
    params:{id:1, firstNme:'Basil'},
    body: {first_name: "bogus",last_name:"user"}

}

//UNCOMMENT WHATEVER YOU ARE TRYING TO TEST
// employeesController.getEmployees(mockRequest,mockResponse);
// employeesController.getEmployeesById(mockRequest,mockResponse);
employeesController.getEmployeesByFirstName(mockRequest,mockResponse);
// userController.getUserById(mockRequest,mockResponse);
// userController.createUser(mockRequest,mockResponse);
// userController.updateUserById(mockRequest,mockResponse);
// userController.deleteUserByFirstName(mockRequest,mockResponse);
