const list = (req, res) => {
  console.log(`inside the GET /employees list route`)
  res.send(`getting employees...`)
};

const show = (req, res) => (req, res) => {
  console.log(`inside the GET /employees by id route`)
  res.send(`getting employee by id...`)
};

const create = (req, res) => (req, res) => {
  console.log(`inside the GET /employees by first_name route`)
  res.send(`getting employee by first name...`)
};

module.exports = { list, show, create };