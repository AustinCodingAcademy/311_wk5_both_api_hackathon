const express = require('express')
const app = express()
const employeesRoutes = require('./routes/employees')
const departmentRoutes = require('./routes/departments')
const salaryRoutes = require('./routes/salary')

const port = process.env.PORT || 4001


app.use(employeesRoutes);
app.use(departmentRoutes);
app.use(salaryRoutes);

app.get('/', function(req, res) {
  res.send(`Welcome to our API`)
})

app.listen(port, () => {
  console.log(`Listening on PORT ${port}`)
});