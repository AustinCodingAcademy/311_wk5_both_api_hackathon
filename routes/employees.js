const getEmployeesController = require("../controllers/getEmployees");
// router.get("/");

const usersController = require("../controllers/employees");
router.get("/");

// router.get('/', usersController.getAllUsers)
router.get("/", (res, req) => {
  res.send("getting employees");
});

router.get("/:id");

router.get("/firstname/:first_name", (req, res) => {
  res.send("getting employes");
});

const usersController = require("../controllers/employees");
router.get("/");

// router.get('/', usersController.getAllUsers)
router.get("/", getEmployeesController);

router.get("/:id");

router.get("/firstname/:first_name", (req, res) => {
  res.send("getting employes");
});
