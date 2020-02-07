const express = require('express')
const app = express()
const employeesRoutes = require('./routes/employees.js');
const port = process.env.PORT || 4001


app.use('/employees', employeesRoutes);


app.get('/', function(req, res) {
  res.send(`Welcome to our API`)
})

app.listen(port, () => {
  console.log(`Listening on PORT ${port}`)
});