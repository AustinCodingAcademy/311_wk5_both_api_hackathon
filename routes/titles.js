const express = require("express");
// setup our router
const router = express.Router();

// set access to the controller we'll use
const controller = require("../controllers/titles");

// get all comments
router.get("/titles", controller.getAllTitles);

// make the router available to the API
module.exports = router;
