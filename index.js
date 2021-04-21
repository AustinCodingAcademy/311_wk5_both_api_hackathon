const express = require("express");
const app = express();
//const bodyParser = require('body-parser')
const employeesRouter = require("./routes/employees");
const salariesRouter = require("./routes/salaries");
const departmentsRouter = require("./routes/departments")
const titlesRouter = require('./routes/titles')
const port = process.env.port || 4001;

app.use(employeesRouter);
app.use(salariesRouter);
app.use(departmentsRouter);
app.use(titlesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to our API");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
