<<<<<<< HEAD

const usersController = require("../controllers/employees");
router.get("/");

// router.get('/', usersController.getAllUsers)
router.get("/", (res,req)=>{
  res.send('getting employees')
});

router.get("/:id");

router.get("/firstname/:first_name", (req, res) => {
  res.send("getting employes")
});
=======

const usersController = require("../controllers/employees");
router.get("/");

// router.get('/', usersController.getAllUsers)
router.get("/", (req,res)=>{
  res.send('getting employees')
});

router.get("/:id");

router.get("/firstname/:first_name", (req, res) => {
  res.send("getting employes");
});
>>>>>>> 56fd9f65b38d97998247e0b60256096005535dcb
