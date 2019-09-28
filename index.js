const express = require("express");
const app = express();
//const bodyParser = require('body-parser')
const employeesRouter = require("./routes/employees");
const salariesRouter = require("./routes/salaries");
const port = process.env.port || 4001;

app.use(employeesRouter);
app.use(salariesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to our API");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
