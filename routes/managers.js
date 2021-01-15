const express = require('express')
const router = express.Router()
const managersController = require("../controllers/managers")

router.get("/managers/:dept_name", managersController.getManagerInfoByDept)

module.exports = router