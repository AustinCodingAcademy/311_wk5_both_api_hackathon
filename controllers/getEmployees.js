module.exports = getAllEmployees;
const getAllEmployees = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.send(rows);
  });
};
