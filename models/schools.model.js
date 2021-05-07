const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const school = new Schema({
  schoolName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    street: { type: String, required: true, trim: true },
    suburb: { type: String, required: true, trim: true },
    postalCode: { type: Number, required: true },
    state: { type: String, required: true, trim: true },
  },
  numberOfStudents: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("schools", school);
