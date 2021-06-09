const express = require('express');
const salariesRouter = express.Router();
const salariesController = require('../controllers/salaries.js');

salariesRouter.get('/salaries/id/:id', salariesController.getUserIdSalary);

salariesRouter.get('/salaries/max', salariesController.getMaxSalary);

module.exports = salariesRouter;