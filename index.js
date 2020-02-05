const express = require('express')
const app = express()
const employeesRoutes = require('./routes/employees.js');
const employeesControllers = require('./controllers/employees.js');

const port = process.env.PORT || 4001

app.use(require('./routes/employees.js'));
app.use(employeesRoutes);
app.use(require('./controllers/employees.js'));
app.use(employeesControllers);

app.get('/', function(req, res) {
  res.send(`Welcome to our API`)
})

app.listen(port, () => {
  console.log(`Listening on PORT ${port}`)
});