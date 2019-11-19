const express = require('express')

const employeeRoutes = express.Router()
const employeeController = require("../controllers/employees")


employeeRoutes.get('/employees/:id, fisrtname/:first_name', (req, res) => {
  res.send("getting employees...");
});

router.get('/employees')