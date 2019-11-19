const express = require('express');
const employees = require("./routes/employees")
const app = express();

// app.get('/', (req, res) => res.send('Welcome to our API'))

const port = process.env.PORT || 4001

app.use(employees)

app.listen(port,() => console.log(`App listening on port ${port}!`))