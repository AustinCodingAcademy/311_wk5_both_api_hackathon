let titlesGetController = require("../controllers/titles/getAll");
let titlesGetIdController = require("../controllers/titles/getById");
let titlesDeleteController = require("../controllers/titles/delete");
let titlesUpdateController = require("../controllers/titles/update");
let titlesCreateController = require("../controllers/titles/create");

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
  // TODO: Need to update below code
  params: { emp_no: "10100"},
  body: { emp_no: "10100", title: "***TESTING***",from_date: "1990-03-21", to_date: "1991-03-21" },
};

//UNCOMMENT WHATEVER YOU ARE TRYING TO TEST
// titlesGetController.getTitles(mockRequest,mockResponse);
titlesGetIdController.getTitlesByNo(mockRequest,mockResponse);
// titlesCreateController.createTitle(mockRequest,mockResponse);
// titlesUpdateController.updateTitle(mockRequest,mockResponse);
// titlesDeleteController.deleteTitle(mockRequest,mockResponse);