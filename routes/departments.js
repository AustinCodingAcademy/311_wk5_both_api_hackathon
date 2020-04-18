const express = require('express');
const router = express.Router();

const getDepartmentsController = require('../controllers/getDepartments');
const getDepartmentsManagersController = require('../controllers/getDepartmentsManagers');


router.get('/', getDepartmentsController.getDepartments);
router.get('/managers', getDepartmentsManagersController.getDepartmentsManagers);


module.exports = router;