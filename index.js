const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 4001;
const employeesRoutes = require("./routes/employees");

console.log(employeesRoutes);


app.use(bodyParser.json());
app.use("/employees", employeesRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to our API");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
