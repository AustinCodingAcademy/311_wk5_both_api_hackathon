const express = require('express');
const app = express();
const port = process.env.PORT || 4001;
const employees = require('./routes/employees');

// app.get('/', (req, res) => {
//     res.send('Welcome to our API');
// })

app.use(employees);

app.listen(port, () => {
    console.log(`web server is listening on port ${port}`);
})