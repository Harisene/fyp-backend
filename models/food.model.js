const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const food = new Schema({
  cctv_video_no: {
    type: String,
    //required: true
  },
  food_type: {
    type: String,
    //required: true
  },
  // food_no: {
  //   type: [Number],
  //   //required: true,
  // },
  amount: {
    type: Number,
    //required: true,
  },
  date: {
    type: String,
  }
});

module.exports = mongoose.model("foods", food);
