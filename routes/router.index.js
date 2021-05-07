const express = require("express");
const router = express.Router();

const ctrlAdmin = require("../controllers/admin.controller");
const getAllSchools = require("../controllers/getAllSchools.controller");

router.get("/admin", ctrlAdmin.admin);
router.post("/login", ctrlAdmin.login);

// for testing
router.get("/all", (req, res) => {
  getAllSchools.getAllSchools(req, res);
});

module.exports = router;
