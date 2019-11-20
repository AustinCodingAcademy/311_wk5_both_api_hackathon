const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const employeesRouter = require("./routes/employees");
const salariesRouter = require("./routes/salaries");

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(employeesRouter);
app.use(salariesRouter);
app.get("/what", (req, res) => {
  res.json({msg: 'WHY YOU NO WORK'});
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
