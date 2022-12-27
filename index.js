const express = require('express');
const app = express();
const employees = require('./routes/employees');
const salaries = require('./routes/salaries');

const port = process.env.PORT || 4001;

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/employees', employees)
app.use('/salaries', salaries)


app.get('/', (req, res) => res.send('Welcome to our API'))


app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });