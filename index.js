//index.js
const express = require("express");
const routerEmployees = require('./routers/routerEmployees');
const routerSalaries = require('./routers/routerSalaries');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4001;


app.use('/employees', routerEmployees);
app.use('/salaries', routerSalaries);

app.get('/', (req, res) => { res.send('Welcome to our API!') });

app.listen(port, () => { console.log(`Listening on port ${port}!`); });