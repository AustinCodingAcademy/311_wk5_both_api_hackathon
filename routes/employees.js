const express = require('express');
const router = express.Router();
const getEmployees = require('../contollers/getEmployees');
const getEmployeesById = require('../contollers/getEmployeesById');
const getEmployeesByFirstName = require('../contollers/getEmployeesByFirstName');

router.get("/employees/", (req,res) => {
	getEmployees()
	res.send("getting employees...")
})

router.get("/employees/:id", (req,res) => {
	getEmployeesById()
	res.send("getting employees ID...")
})

router.get("/employees/firstname/:first_name", (req,res) => {
	getEmployeesByFirstName()
	res.send("getting employees first name...")
})


module.exports = router;