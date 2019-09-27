const getEmployeesController = require("../controllers/getEmployees");
// router.get("/");

// router.get('/', usersController.getAllUsers)
router.get("/", getEmployeesController);

router.get("/:id");

router.get("/firstname/:first_name", (req, res) => {
  res.send("getting employes");
});
