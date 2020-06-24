const express = require('express');
const app = express();
const port = process.env.PORT || 4001
const employees = require('./orutes/employees')

app.get('/', (req, res) => res.send('WELCOME TO OUR API'))

app.listen(port, () => {
    console.log('   app is listening on:', port)
})