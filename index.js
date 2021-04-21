const express = require('express')
const app = express()

const employeesRoutes = require('./routes/employees');

app.use(employeesRoutes)
const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
    res.send('Welcome to our API!')
  })

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});


  