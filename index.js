const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json('Welcome to our API!')
})

app.listen('4001', () => console.log('Server started on port 4001'))