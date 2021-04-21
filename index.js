const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const employeesRouter = require("./routes/employees");
const salariesRouter = require("./routes/salaries");
const departmentRouter = require("./routes/departments");

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use('/employees', employeesRouter);
app.use('/salaries', salariesRouter);
app.use('/departments', departmentRouter);

//Test code
app.get("/what", (req, res) => {
  console.log("hi");
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
