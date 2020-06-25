const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json())

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });