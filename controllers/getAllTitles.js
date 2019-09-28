const mysql = require("mysql");
const pool = require("../mysql/connections");
const { handleSQLError } = require("../mysql/error");

const getAllTitles = (req, res) => {
	// SELECT ALL USERS
	let sql = "SELECT DISTINCT ?? FROM ??";
	sql = mysql.format(sql, ["title", "titles"]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

module.exports = { getAllTitles };
