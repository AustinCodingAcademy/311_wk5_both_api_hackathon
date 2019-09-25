<<<<<<< HEAD
const usersController = require("../controllers/employees");
router.get("/");
=======
// router.get('/', usersController.getAllUsers)
router.get("/", (res,req)=>{
  res.send('getting employees')
});
>>>>>>> 26be57f6297e27a1e87fce032b3822a317ef2614
router.get("/:id");

router.get("/firstname/:first_name", (req, res) => {
  res.send("getting employes");
});
