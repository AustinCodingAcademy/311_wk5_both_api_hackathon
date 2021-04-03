const express = require('express')
const router = express.Router()
const salariesController = require('../controllers/salaries')
// const saleries = WAITING FOR CONTROLLERS / POOL

router.get("/salaries/employeenumber/:emp_no", salariesController.getSalariesById)
router.get("/salaries/:salary", salariesController.getSalariesByAmount)

// router.get("/salaries/amount", (req, res) => {
//     res.send('getting saleries...')
// })

module.exports = router