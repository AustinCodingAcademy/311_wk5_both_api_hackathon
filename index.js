const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const employeesRouter = require('./routes/employees');
const departmentsRouter = require('./routes/departments');

const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use('/employees', employeesRouter)
app.use('/departments', departmentsRouter)

// app.get('/', (req, res) => {
//     res.send('Welcome to our API!')
//   })

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });
   


