//Required Modules for Server
const express = require('express');
const app = express();

//Body-Parsing
app.use(express.json());
app.use(express.urlencoded({ extended:true}))

//Port Number
const port = process.env.PORT || 3000;

//Open server Port
app.listen(port, (err) => {
  if(err){
    console.log("error in server")
  }
  console.log(`I am now listening on port ${port}`);
});
