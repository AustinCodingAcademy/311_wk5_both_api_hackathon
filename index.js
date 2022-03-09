const express = require("express");
const app = express();
const apiErrorHandler = require("./error/api-error-handler");
const employeesRouter = require("./routes/employee")

const port = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});
app.use('/employees', employeesRouter);
app.use(apiErrorHandler);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
