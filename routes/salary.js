const router = express.Router()

const salariesController = require('../controllers/getSalariesByEmpNo')


router.get('/:id', salariesController.getSalariesById)

module.exports = router;