


const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees')

router.get('/employees', employeesController.list);
router.get('/employees:id', employeesController.show);
router.get('/employees:firstName', employeesController.first);




module.exports = router 


