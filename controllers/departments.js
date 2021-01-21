const pool = require("../mysql/connection.js");
const mysql = require("mysql");

const getDepartments = (req, res) => {
  let sql = "SELECT * FROM departments LIMIT 50";
  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send("Something went wrong.");
    } else {
      return res.json(result);
    }
  });
};

const getDepartmentsById = (req, res) => {
  let sql = "SELECT * FROM departments WHERE dept_no = ?";
  const replacements = [req.params.dept_no];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send("Something went wrong.");
    } else {
      return res.json(result);
    }
  });
};

const getDepartmentsByName = (req, res) => {
  let sql = "SELECT * FROM departments WHERE dept_name = ?";
  const replacements = [req.params.dept_name];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send("Something went wrong.");
    } else {
      return res.json(result);
    }
  });
};

module.exports = {
  getDepartments,
  getDepartmentsById,
  getDepartmentsByName,
};
