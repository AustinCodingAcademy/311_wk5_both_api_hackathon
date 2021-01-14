const express = require('express')
const router = express.Router()
// const saleries = WAITING FOR CONTROLLERS / POOL

router.get("/", (req, res) => {
    res.send('getting saleries...')
})

router.get("/:id", (req, res) => {
    res.send('getting saleries...')
})

router.get("firstname/:first_name", (req, res) => {
    res.send('getting saleries...')
})

module.exports = router