const express = require('express');
const app = express();
const port = process.env.PORT || 4001
const usersRouter = require('./routes/employees')

app.get('/', (req, res) => res.send('WELCOME TO OUR API'))

app.use(usersRouter)

app.listen(port, () => {
    console.log('app is listening on:', port)
})