const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const employeeRouter = require('./routes/employees')
app.use(bodyParser.json())

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})
app.use('/employees', employeeRouter)
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });