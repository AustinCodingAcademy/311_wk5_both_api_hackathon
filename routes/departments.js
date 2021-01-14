const express = require('express')
const router = express.Router()
// const departments = WAITING FOR CONTROLLERS / POOL

router.get("/", (req, res) => {
    res.send('getting departments...')
})

router.get("/:id", (req, res) => {
    res.send('getting departments...')
})

router.get("firstname/:first_name", (req, res) => {
    res.send('getting departments...')
})

module.exports = router