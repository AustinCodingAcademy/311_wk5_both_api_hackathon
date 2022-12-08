const express =require('express');
const app = express();

const port = process.env.PORT || 4001;

const bodyParser = require('body-parser')
const employers = require('./routers/employers')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(employers)



app.get('/', (req, res) => res.send('Welcome to our API'))



app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });