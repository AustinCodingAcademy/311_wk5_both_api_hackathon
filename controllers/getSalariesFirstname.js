const mysql = require("mysql");
const pool = require("../mysql/connections");
const { handleSQLError } = require("../mysql/error");

const getEmployeesSalariesFirstName = (req, res) => {
	let sql = "SELECT * FROM ?? WHERE ?? = ?";
	sql = mysql.format(sql, ["employees", "salaries", req.params.first_name]);


	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

module.exports = { getEmployeesSalariesFirstName};