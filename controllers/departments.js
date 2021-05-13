const connection = require('../sql/connection')

const getDepartments = (req, res) => {
  console.log(`inside the GET /departments route`);
  connection.query('SELECT * FROM departments LIMIT 100', function(err, results){
    if(err){
      console.log(`there is an error: ${err}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json(results)
    }
  });
};

const getDepartmentsByNo = (req, res) => {
  console.log(`inside the GET /departments/:dept_no route`);
  connection.query(`SELECT * FROM departments WHERE dept_no = '${req.params.dept_no}'`, function(err, results){
    if(err){
      console.log(`there is an error: ${err}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json(results)
    }
  });
};

const getManagersByDeptNo = (req, res) => {
  console.log(`inside the GET /departments/managers/:dept_no route`);
  connection.query(
    `SELECT
      employees.emp_no,
      employees.first_name,
      employees.last_name,
      employees.hire_date,
      departments.dept_name,
      departments.dept_no,
      dept_manager.from_date,
      dept_manager.to_date
    FROM employees
    JOIN dept_manager
    JOIN departments
    WHERE 
      dept_manager.to_date > CURDATE()
    AND
      departments.dept_no = '${req.params.dept_no}'
    AND
      dept_manager.emp_no = employees.emp_no`
, function(err, results){
    if(err){
      console.log(`there is an error: ${err}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json(results)
    }
  });
};

const getEmployeesByDeptNo = (req, res) => {
  console.log(`inside the GET /departments/employees/:dept_no route`);
  connection.query(
    `SELECT
      employees.emp_no,
      employees.first_name,
      employees.last_name,
      employees.hire_date,
      departments.dept_name,
      departments.dept_no,
      dept_emp.from_date,
      dept_emp.to_date
    FROM employees
    JOIN dept_emp
    JOIN departments
    WHERE 
      dept_emp.to_date > CURDATE()
    AND
      departments.dept_no = '${req.params.dept_no}'
    AND
      dept_emp.emp_no = employees.emp_no
    LIMIT 100`
, function(err, results){
    if(err){
      console.log(`there is an error: ${err}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json(results)
    }
  });
};

module.exports = { getDepartments, getDepartmentsByNo, getManagersByDeptNo, getEmployeesByDeptNo };