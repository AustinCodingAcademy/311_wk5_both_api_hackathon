const express = require('express')
const app = express()
const bodyParser = require("body-parser");

const port = process.env.PORT || 4001;
app.use(express.static('public'))
app.use(bodyParser.json());



app.get("/index.js", (request,response) => {
  res.send(['Welcome to our API']);
})
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });

