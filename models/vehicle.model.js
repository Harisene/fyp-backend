const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicles = new Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  numberPlate: { type: String, required: true },
});

module.exports = mongoose.model("vehicles", vehicles);
