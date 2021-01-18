const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/employees')

const app = express()

app.use(bodyParser.json())

app.use(router)

app.listen('4001', () => console.log('Server started on port 4001'))