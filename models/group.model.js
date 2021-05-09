const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const group = new Schema({
  cctv_video_no: {
    type: String,
    //required: true
  },
  group_id: {
    type: Number,
    //required: true,
  },  
  group_type: {
    type: String,
    //required: true
  },
  members_amount: {
    type: Number,
    //required: true,
  }
});

module.exports = mongoose.model("groups", group);
