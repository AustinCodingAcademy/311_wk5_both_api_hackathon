let userController = require("../controllers/departments");

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
  params: { dept_no: "d009"},
  body: { dept_no: "d011", dept_name: "fish killers" },
};

//UNCOMMENT WHATEVER YOU ARE TRYING TO TEST
// userController.getDepartments(mockRequest,mockResponse);
// userController.getDepartmentsByNo(mockRequest,mockResponse);
// userController.createDepartment(mockRequest,mockResponse);
// userController.updateDepartment(mockRequest,mockResponse);
// userController.deleteDepartment(mockRequest,mockResponse);