const router = express.Router()

const employeesController = require('../controllers/employees.js')

router.get('/employees', employeesController.getEmployees)

router.get('/, /:id', employeesController.getEmployeesById)

router.get('firstname/:first_name', employeesController.getEmployeesByFirstName)

module.exports = router;