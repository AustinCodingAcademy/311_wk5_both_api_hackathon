const mysql = require("mysql");
const pool = require("../mysql/connection");
const sqlErrorHandler = require("../mysql/error");

const getSalaries = (req, res) => {
  res.send('getting info...')
}

const getSalariesById = (req, res) => {
  res.send('hi')
}

const getSalariesRangeHigh = (req, res) => {
  res.send('hi')
}

module.exports = { getSalaries, getSalariesById, getSalariesRangeHigh };






// salariesController.getSalariesById
// salariesController.getSalariesRangeHigh);