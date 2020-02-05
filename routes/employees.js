const router = express.Router()

router.get('/, /:id', res.send(`getting employees`))

router.get('firstname/:first_name', res.send(`getting employees`))

module.exports = router;