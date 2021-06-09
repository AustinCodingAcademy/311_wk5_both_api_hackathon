const express = require('express');
const employeesRouter = require('./routes/employees.js')
const departmentsRouter = require('./routes/departments.js')
const salariesRouter = require('./routes/salaries.js')
const app = express();
app.use(express.json());

const port = process.env.PORT || 4001

app.use(employeesRouter)

app.use(departmentsRouter)

app.use(salariesRouter)

app.listen(port, () => {
    console.log('app is listening on:', port)
})

