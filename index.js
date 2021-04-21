const express = require('express')
const app = express();

const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send("Baby Yoda FTW.");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});