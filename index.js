const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const employeesRouter = require("./routes/employees");
const salariesRouter = require("./routes/salaries");
const departmentsRouter = require("./routes/departments");
const titlesRouter = require("./routes/titles");
const port = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use("/employees", employeesRouter);
app.use("/salaries", salariesRouter);
app.use("/departments", departmentsRouter);
app.use("/titles", titlesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to our server!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
