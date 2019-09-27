const express = require("express");
const router = express.Router();
const getEmployeesByFirstName = require("../controllers/getEmployeesByFirstName");
const getEmployeesController = require("../controllers/getEmployees");
const getEmployeesById = require("../controllers/getEmployeesById");

router.get("/", getEmployeesController);
router.get("/employees/firstname/:first_name", getEmployeesByFirstName);

router.get("/:id");

router.get("/firstname/:first_name", (req, res) => {
  res.send("getting employes");
});

router.get("/", getEmployeesController);

router.get("/:id", getEmployeesById);

router.get("/firstname/:first_name", (req, res) => {
  res.send("getting employes");
});

module.exports = router;
