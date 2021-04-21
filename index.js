const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 4001
const routes = require('./routes/employees')










app.use(bodyParser.json());
app.use(routes);

app.get('/' , (req, res) =>{
    res.send("Server is running")
})

app.listen(port, () =>{
  console.log(`Example app listening on port ${port}!`)
})