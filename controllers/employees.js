const connection = require('../sql/connection')

const getEmployees = (req, res) => {
  console.log(`inside the GET /employees list route`);
  connection.query('SELECT * FROM employees LIMIT 100', function(err, results){
    if(err){
      console.log(`there is an error: ${err}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json(results)
    }
  });
};

const getEmployeesById = (req, res) => {
  console.log(`inside the GET /employees/:id by id route`);
  let sql = `SELECT * FROM employees WHERE emp_no = ${req.params.id}`;
  connection.query(sql, (err, results) => {
    if(err){
      console.log(`there is an error : ${err}`);
      res.status(500).send(`internal service error`)
    };
    console.log(results);
    res.json(results)
  })
};

const getEmployeesByFirstName = (req, res) => {
  console.log(`inside the GET /employees/firstname/:first_name route`);
  let sql = `SELECT * FROM employees WHERE first_name = '${req.params.first_name}'`;
  connection.query(sql, (err, results) => {
    if(err){
      console.log(`there is an error : ${err}`);
      res.status(500).send(`internal service error (employee by firstname), ${req.params.first_name}`)
    };
    console.log(results);
    res.json(results)
  })
};

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };