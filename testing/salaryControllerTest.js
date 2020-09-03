let deleteSalariesController = require("../controllers/salary/delete");
let updateSalariesController = require("../controllers/salary/update")
let getByEmpNoSalariesController = require("../controllers/salary/getById")
let getAllSalariesController = require("../controllers/salary/getAll")
let createSalaryController = require("../controllers/salary/create")

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
deleteSalariesController.deleteSalary(mockRequest,mockResponse);
// updateSalariesController.updateSalary(mockRequest,mockResponse);
// getByEmpNoSalariesController.getSalariesByNo(mockRequest,mockResponse);
// getAllSalariesController.getSalaries(mockRequest,mockResponse);
// createSalaryController.createSalary(mockRequest,mockResponse);