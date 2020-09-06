//controllers/controllerSalaries.js
const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

const getAllSalaries = (req, res) => {
    pool.query(`select e.emp_no,e.first_name,e.last_name,s.salary
    from employees e inner join salaries s on e.emp_no=s.emp_no
    inner join 
    (
    select emp_no,max(to_date) as to_date 
    from salaries 
    group by emp_no
    ) d on s.emp_no=d.emp_no and s.to_date=d.to_date
    order by s.salary desc
    limit 50`, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    });
};

const getSalarieById = (req, res) => {
    let sql = `select e.emp_no, e.first_name, e.last_name, s.salary, s.from_date, s.to_date
        from employees e inner join salaries s on e.emp_no = s.emp_no 
        where e.emp_no=?`;
    let replacements = [req.params.id];
    sql = mysql.format(sql, replacements);
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    });
};

const getSalarieByFirstName = (req, res) => {
    let sql = `select e.emp_no, e.first_name, e.last_name, s.salary, s.from_date, s.to_date
      from employees e inner join salaries s on e.emp_no = s.emp_no 
      where e.first_name=?`;
    let replacements = [req.params.first_name];
    sql = mysql.format(sql, replacements);
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    });
};


module.exports = {
    getAllSalaries,
    getSalarieById,
    getSalarieByFirstName
};

/*


select e.emp_no,e.first_name,e.last_name,s.salary,s.from_date,s.to_date
from employees e inner join salaries s on e.emp_no=s.emp_no
limit 2;

select e.emp_no,e.first_name,e.last_name,s.salary,s.from_date,s.to_date
from employees e inner join salaries s on e.emp_no=s.emp_no
where e.emp_no=10001;

select e.emp_no,e.first_name,e.last_name,s.salary,s.from_date,s.to_date
from employees e inner join salaries s on e.emp_no=s.emp_no
where e.first_name='Georgi';

select e.emp_no,e.first_name,e.last_name,s.salary
from employees e inner join salaries s on e.emp_no=s.emp_no
inner join 
(
select emp_no,max(to_date) as to_date 
from salaries 
group by emp_no
) d on s.emp_no=d.emp_no and s.to_date=d.to_date
order by s.salary desc
limit 50

*/