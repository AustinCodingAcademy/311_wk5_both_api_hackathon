const express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const usersRouter = require("./routes/employees");
const bodyParser = require("body-parser");
app.get("/", (req, res) => res.send("Welcome to our API"));

//Body Paser Middlewear
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//users Api routes
app.use("/api", usersRouter);

app.listen(port, () => {
  console.log("app is listening on:", port);
});
