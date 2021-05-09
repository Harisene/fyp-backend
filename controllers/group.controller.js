const group = require("../models/group.model");

module.exports.getGroups = (req, res) => {
    group.find({cctv_video_no:req.params.cctv}, (err, groups) => {
    if (err) {
      console.log("Error in group.controller: " + err);
      res.status(500).send("Something went wrong");
    } else {
      console.log(groups.length + " groups found!");
      res.status(200).json(groups);
    }
  });
};

module.exports.getAllGroups = (req, res) => {
  group.find((err, groups) => {
  if (err) {
    console.log("Error in group.controller: " + err);
    res.status(500).send("Something went wrong");
  } else {
    console.log(groups.length + " groups found!");
    res.status(200).json(groups);
  }
});
};
