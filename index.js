//Required Modules for Server
const express = require('express');
const app = express();
const employees = require('./routes/employees-router');

//Body-Parsing
app.use(express.json());
app.use(express.urlencoded({ extended:true}))

//Default Route
app.get('/', (req, res) =>{
  res.send('Welcome To Our API')
})

//Port Number
const port = process.env.PORT || 3000;

//Open server Port
app.listen(port, (err) => {
  if(err){
    console.log("error in server")
  }
  console.log(`I am now listening on port ${port}`);
});
