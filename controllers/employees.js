

exports.getEmployees = function list(req, res) {
  return res.json(employees);
}

exports.getEmployeesById = function show(req, res) {
  const found = employees.some(employees => employees.id === parseInt(req.params.id));

  if (found) {
    res.json(employees.find(employees => employees.id === parseInt(req.params.id))); 
  } else {
    res.status(404).json({ msg: `No employee with the id of ${req.params.id}`});
  }
}

exports.getEmployeesByFirstName = function show(req, res) {
  const found = employees.some(employees => employees.firstName === parseInt(req.params.firstName));

  if (found) {
    res.json(employees.find(employees => employees.firstName === parseInt(req.params.firstName))); 
  } else {
    res.status(404).json({ msg: `No employee with the first name of ${req.params.firstName}`});
  }
}

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }