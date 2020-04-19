const express = require("express");
// setup our router
const router = express.Router();

// set access to the controller we'll use
const controller = require("../controllers/salaries");

// get all comments
router.get("/salaries", controller.getAllSalaries);

router.get("/salaries/:first_name", controller.getSalariesByFirstName);

router.get("/salaries/:emp_no", controller.getSalaryByID);

router.get("/salaries/above/:num", controller.getSalariesAbove);

// calc is in the form "min" "max" or
// some SQL condition with _ characters instead of spaces
// ex1: salaries/calculation/salary_<_100000_order_by_salary_asc
// ex2: salaries/calculation/salary_>_50000_AND_salary_<_60000
router.get("/salaries/calculation/:calc", controller.getSalariesCalc);

router.get("/salary/minmax", controller.getSalaryMinMax);

router.get("/salary/DeptMinMax", controller.getSalaryDeptMinMax);

// make the router available to the API
module.exports = router;
