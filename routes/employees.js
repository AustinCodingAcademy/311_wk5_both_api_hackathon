// router.get('/', usersController.getAllUsers)
router.get("/");
router.get("/:id");

router.get("/firstname/:first_name", (req, res) => {
  res.send("getting employes");
});
