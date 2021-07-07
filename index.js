const express = require('express');
const app = express();
const port = 4001;

const employeesRouter = require("./routes/employees")
app.use(employeesRouter)

app.get('/',(req, res) => {
  res.send('Welcome to our API')
})

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}!`);
});