const mysql = require("mysql");
const pool = require("../mysql/connections");
const { handleSQLError } = require("../mysql/error");

const getEmployeesById = (req, res) => {
	// SELCT USERS WHERE IS = <REQ PARAMS ID>;
	let sql = "SELECT * FROM ?? WHERE ?? = ?";
	sql = mysql.format(sql, ["employees", "emp_no", req.params.id]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

module.exports = { getEmployeesById };
