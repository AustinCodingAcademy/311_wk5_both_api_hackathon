const express = require('express')
//const bodyParser = require('body-parser')
const employeesRouter = require('./routes/employees')

const app = express()
const port = process.env.PORT || 4001

app.use('/employees', employeesRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our API')
})

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}`)
})