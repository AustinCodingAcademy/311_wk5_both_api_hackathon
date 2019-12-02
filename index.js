const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 4001;
const employeesRouter = require("./routes/employees");

app.use(bodyParser.json());
app.use('/employees', employeesRouter);



app.get('/', (req, res) => {
  res.send('Welcome to our API!')
})


app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});