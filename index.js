const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const employeeRouter = require('./routes/employees')
const departmentRouter = require('./routes/departments.js')
const titleRouter = require('./routes/titles.js')
app.use(bodyParser.json())

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})
app.use('/employees', employeeRouter)
app.use('/departments', departmentRouter)
app.use('/titles', titleRouter)
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });