const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

// show list of all titles
const getAllTitles = (req, res) => {
	// set the sql query
	let sql = "SELECT distinct(title) FROM titles GROUP BY title";

	// run the query
	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

//export the functions we just set up
module.exports = {
	getAllTitles
};
