const express = require('express');
const departmentRouter = require('./routes/department');
const app = express();
const port = process.env.PORT || 4001;

app.use(express.json())

app.use('/department', departmentRouter)

app.get('/', (req, res) => {
  res.send('hello world!');
})

app.listen(port, () => console.log(`Listening on port ${port}`));