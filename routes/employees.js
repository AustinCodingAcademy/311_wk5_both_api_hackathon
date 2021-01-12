const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()

// const employees = WAITING TO HOOK MY MYSQL

// app.get("/", (req, res) => {
//     res.send('getting employees...')
// })

router.get('/', employeesController.getEmployees);

// app.get("/:id", (req, res) => {
//     res.send('getting employees...')
// })

router.get('/', employeesController.getEmployeesById);


// app.get("firstname/:first_name", (req, res) => {
//     res.send('getting employees...')
// })

router.get('/', employeesController.getEmployeesByFirstName);


module.exports = router