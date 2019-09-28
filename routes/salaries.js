const express = require("express");
const router = express.Router();

const getSalariesController = require("../controllers/getSalaries");
const getSalariesByIdController = require("../controllers/getSalariesById");
const getSalariesByFirstNameController = require("../controllers/getSalariesByFirstName");

router.get("/employees", getSalariesController.getAllSalaries);

router.get("/employees/:id", getSalariesByIdController.getSalariesById);

router.get(
  "/employees/firstname/:first_name",
  getSalariesByFirstNameController.getSalariesByFirstName
);

module.exports = router;
