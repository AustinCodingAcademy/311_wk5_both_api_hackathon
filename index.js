const express = require('express')
const app = express()
const port = process.env.PORT || 4001;



// app.get('/', function(req,res) {
//   res.send('Welcome to our API')
// })
app.use('/employees', require('./routes/employees'))

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });
 