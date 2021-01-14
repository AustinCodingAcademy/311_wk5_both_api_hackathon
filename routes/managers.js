const express = require('express')
const router = express.Router()

const { response } = require('express')
const mysql = require('mysql')
const pool = require('../mysql/connection')
// const departments = WAITING FOR CONTROLLERS / POOL

router.get("/departments/manager", (req, res) => {
    res.send('getting managers...')
})

module.exports = router