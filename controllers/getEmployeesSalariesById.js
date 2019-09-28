const mysql = require("mysql");
const pool = require("../mysql/connections");
const { handleSQLError } = require("../mysql/error");

const getEmployeesSalariesById = (req, res) => {
  // SELCT USERS WHERE IS = <REQ PARAMS ID>;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["employees", "salaries", req.params.em_no]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = { getEmployeesSalariesById };
