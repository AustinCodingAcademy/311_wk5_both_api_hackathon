var express = require('express')
var router = express.Router()


router.get('/employees', function (req, res) {
  res.send("getting employees...")
})

router.get('/employees/:id', function (req, res) {
  res.send("getting employees..." )
})

router.get('/employees/firstname/:first_name', function (req, res) {
  res.send("getting employees..." )
})





module.exports = router