const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const washroom = new Schema({
  date: { type: String, required: true },
  gender: { type: String, required: true },
});

module.exports = mongoose.model("washroom", washroom);
