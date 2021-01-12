const express = require('express')
const router = express.Router()
// const employees = WAITING TO HOOK MY MYSQL

app.get("/", (req, res) => {
    res.send('getting employees...')
})

app.get("/:id", (req, res) => {
    res.send('getting employees...')
})

app.get("firstname/:first_name", (req, res) => {
    res.send('getting employees...')
})

module.exports = router