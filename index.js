const express = require('express')
const app = express()

const port = process.env.PORT || 4001


app.use('/employees', require('./routes/employees'));

app.use('/departments', require('./routes/departments'));

// app.use((req, res) => {
//   res.send(`Status ${res.statusCode}. Page not found.`)
// })

app.get('/', (req, res) => res.send('Welcome to our API!'))


app.listen(port, () => {
  console.log('app is listening on:', port)
})