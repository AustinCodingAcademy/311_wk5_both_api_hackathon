const express = require('express')
const app = express()
const port = process.env.PORT || 4001












app.get('/' , (res, send) =>{
    res.json("Server is running")
})

app.listen(port, () =>{
  console.log(`Example app listening on port ${port}!`)
})