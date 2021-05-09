const express = require("express");
const router = express.Router();

const ctrlAdmin = require("../controllers/admin.controller");
const getAllSchools = require("../controllers/getAllSchools.controller");
const { getWashroom } = require("../controllers/getWashroom.controller");
const { getInteraction } = require("../controllers/getInteraction.controller");
const ctrlFood = require("../controllers/food.controller");
const ctrlGroup = require("../controllers/group.controller");

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

router.get("/foods/:cctv", (req, res) => {
  ctrlFood.getFoods(req, res);
});

router.get("/groups/:cctv", (req, res) => {
  ctrlGroup.getGroups(req, res);
});

router.get("/foods", (req, res) => {
  ctrlFood.getAllFoods(req, res);
});

router.get("/groups", (req, res) => {
  ctrlGroup.getAllGroups(req, res);
});

module.exports = router;
