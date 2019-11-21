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
    params:{emp_no:100001},
    body: {first_name: "newuser",last_name:"was inserted"},
    query:{include:["salary"]},


}

//UNCOMMENT WHATEVER YOU ARE TRYING TO TEST
//userController.getEmployees(mockRequest,mockResponse);
userController.getEmployeesById(mockRequest,mockResponse);

