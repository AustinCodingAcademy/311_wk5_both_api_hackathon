let userController = require("./controllers/employees");
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
    params:{id:1},
    body: {first_name: "newuser",last_name:"was inserted"}

}

//UNCOMMENT WHATEVER YOU ARE TRYING TO TEST
//userController.getEmployees(mockRequest,mockResponse); 
//userController.getEmployeesById(mockRequest,mockResponse);
//userController.getEmployeesByFirstName(mockRequest,mockResponse);
//userController.getIdWithSalary(mockRequest,mockResponse);
//userController.getIdWithDepartment(mockRequest,mockResponse);
userController.getDepartments(mockRequest,mockResponse);
 //userController.getTitles(mockRequest,mockResponse);