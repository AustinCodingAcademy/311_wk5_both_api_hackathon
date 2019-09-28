const { handleSQLError } = require("../mysql/error");

const getAllEmployees = (req, res) => {
	// SELECT ALL USERS
	pool.query("SELECT * FROM employees", (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

module.exports = getAllEmployees
