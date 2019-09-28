const mysql = require("mysql");
const pool = require("../mysql/connections");
const { handleSQLError } = require("../mysql/error");

const getDeptsByEmplById = (req, res) => {
	// SELECT ALL USERS
	let sql = "SELECT * FROM ?? LIMIT ?";
	sql = mysql.format(sql, ["dept_emp", "emp_no", re.params.id]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

module.exports = { getDeptsByEmplById };
