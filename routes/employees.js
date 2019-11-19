const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router()

//const employeesController = require("../controllers/employees")

router.use(bodyParser.json())

router.get("/", (req, res) => res.send('getting employee data'))

router.get("/:id", (req, res) => res.send('getting specific employee'))

router.get("/firstname/:first_name", (req, res) => res.send ('getting employee by first name'))

module.exports = router