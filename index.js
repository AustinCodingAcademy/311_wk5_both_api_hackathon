const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const employees = require('./routes/employees')

app.use(bodyParser.json());
app.use(employees)


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log(`inside our 1st GET route`);
  res.send(`Welcome to our API!`)
})

app.listen(port, () => {
  console.log(`Web Server is listening on port ${3000}`)
})