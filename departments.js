let departmentGetController = require("./controllers/departments/getall");
let departmentGetIdController = require("./controllers/departments/getbyid");
let departmentDeleteController = require("./controllers/departments/delete");
let departmentPutController = require("./controllers/departments/put");
let departmentCreateController = require("./controllers/departments/create");

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
// departmentGetController.getDepartments(mockRequest,mockResponse);
// departmentGetIdController.getDepartmentsByNo(mockRequest,mockResponse);
// departmentCreateController.createDepartment(mockRequest,mockResponse);
// departmentPutController.updateDepartment(mockRequest,mockResponse);
// departmentDeleteController.deleteDepartment(mockRequest,mockResponse);