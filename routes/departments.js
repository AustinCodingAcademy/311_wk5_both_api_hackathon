const express = require('express')
const router = express.Router()
// const departments = WAITING FOR CONTROLLERS / POOL

router.get("/departments/name", (req, res) => {
    res.send('getting department names...')
})

module.exports = router