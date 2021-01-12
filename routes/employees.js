const express = require("express");
const router = express.Router();
// const users = require("../data/index.js");

router.get("/users", (req, res) => {
  return res.json("getting employees...");
});

router.get("/users/:id", (req, res) => {
  return res.json("getting employees...");
});

router.get("/users/firstname/:first_name", (req, res) => {
  return res.json("getting employees...");
});

module.exports = router;
