const express = require('express');
const app = express();
const employees = require('./routes/employees');

const port = process.env.PORT || 4001;

app.use(employees);

app.get('/', (req, res) => {
  res.send('Welcome to our API');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});