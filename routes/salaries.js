const express = require("express");
const router = express.Router();

//  Get all employees
router.get("/employees");
//  Get employees by ID
router.get("/employees/:id");
//  Get employees by first name
router.get("/employees/firstname/:first_name");




module.exports = router