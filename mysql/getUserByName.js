const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');
const getUsersByFirstName = (req, res) => {
	// SELECT USERS BY FIRST NAME
	pool.query('SELECT * FROM users where first_name = ?', (err, rows) => {
		sql = mysql.format(sql, req.body.first_name);

		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

module.exports = {
	getUsersByFirstName
};
