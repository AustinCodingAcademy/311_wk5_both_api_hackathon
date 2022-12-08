router.get('/', res.send)
router.get('/:id', res.send)
router.get('firstname/:first_name', res.send)

app.get('/', (req, res) => {
    res.send('getting employees...')
  })

module.exports = router