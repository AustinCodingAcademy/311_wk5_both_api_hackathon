const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = process.env.PORT || 4001;
const employeeRoutes = require("./routes/employees")
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(employeeRoutes)


app.get('/', (request,res) => {
  res.send(['Welcome to our API']);
})
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });

