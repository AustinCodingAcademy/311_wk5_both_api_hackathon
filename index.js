const express = require('express')
const app = express()
const port = process.env.PORT || 4001; 
const employees = require ('./routes/employees');
const managers = require('./routes/managers');
const departments = require('./routes/departments');
const salaries = require('./routes/salaries');

app.use(employees);
app.use(managers);
app.use(departments);
app.use(salaries);

app.get("/", (req, res) => {
    res.send('Welcome to our API')
})

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`)
})