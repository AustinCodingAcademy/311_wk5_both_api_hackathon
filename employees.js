

const getEmployees = (req, res) => {
    res.json(employees);
}

const getEmployeesById = (req, res) => {
    let empId = employees.find(x => x.emp_no == req.params.id);
    if(empId) {
        res.json(empId);
    } else {
        res.status(400).send(`Employee ${empId} does not exist.`)
    }
}