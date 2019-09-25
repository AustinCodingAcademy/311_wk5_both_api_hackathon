// router.get('/', usersController.getAllUsers)
router.get("/", (res,req)=>{
  res.send('getting employees')
});
router.get("/:id");

router.get("/firstname/:first_name", (req, res) => {
  res.send("getting employes");
});
