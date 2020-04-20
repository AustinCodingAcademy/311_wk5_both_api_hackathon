const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

// set our paths for the routers
app.use(require("./routes/employees"));

app.use(require("./routes/salaries"));

app.use(require("./routes/departments"));

app.use(require("./routes/titles"));

// decide which port to use
const port = process.env.PORT || 4002;

// start the server!
app.listen(port, () => {
	console.log(`Web server is listening on port ${port}!`);
});
