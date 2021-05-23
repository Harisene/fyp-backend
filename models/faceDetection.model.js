const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const faceDetection = new Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  type: { type: String, required: true },
  cctv: { type: Number, required: true },
  person_id: { type: String, required: true },
});

module.exports = mongoose.model("facedetections", faceDetection);
