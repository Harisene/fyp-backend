const express = require("express");
const router = express.Router();

const ctrlAdmin = require("../controllers/admin.controller");
const getAllSchools = require("../controllers/getAllSchools.controller");
const { getWashroom } = require("../controllers/getWashroom.controller");
const { getInteraction } = require("../controllers/getInteraction.controller");

router.get("/admin", ctrlAdmin.admin);
router.post("/login", ctrlAdmin.login);

// for testing
router.get("/all", (req, res) => {
  getAllSchools.getAllSchools(req, res);
});

router.get("/washroom", (req, res) => {
  getWashroom(req, res);
});

router.get("/interaction", (req, res) => {
  getInteraction(req, res);
});

module.exports = router;
