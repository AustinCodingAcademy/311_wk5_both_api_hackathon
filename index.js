const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 4001;
const employeesRoutes = require("./routes/employees");

console.log("yo its working");

app.use(bodyParser.json());
app.use(employeesRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to our API");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
