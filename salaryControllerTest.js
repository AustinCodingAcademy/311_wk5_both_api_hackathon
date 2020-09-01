let salaryDeleteController = require("./controllers/salary/delete");
let salaryUpdateController = require("./controllers/salary/update")
let salaryGetByEmpNoController = require("./controllers/salary/get-by-empNo")
let salaryGetAllController = require("./controllers/salary/get-all")

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
  params: { emp_no: 10001, salary: "24000" },
  body: { from_date: "1990-03-21", to_date: "1991-03-21" },
};

//UNCOMMENT WHATEVER YOU ARE TRYING TO TEST
salaryDeleteController.deleteSalary(mockRequest,mockResponse);
salaryUpdateController.updateSalary(mockRequest,mockResponse);
salaryGetByEmpNoController.getSalariesByNo(mockRequest,mockResponse);
salaryGetAllController.getSalaries(mockRequest,mockResponse);