const express = require('express');
const app = express();
const port = 4001;

const employeesRouter = require('./routes/employee');

app.use(express.json())

app.use('/employees', employeesRouter)

app.get('/', (req, res) => {
  res.send('hello world!');
})

app.listen(port, () => console.log(`Listening on port ${port}`));