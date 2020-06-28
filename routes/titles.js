const express = require("express");
const titlesController = require("../controllers/titles");
const router = express.Router();

router.get("/", titlesController.getTitles);
router.get("/:emp_no", titlesController.getTitlesByEmployeeId);

module.exports = router;
