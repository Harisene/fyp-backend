const food = require("../models/food.model");

module.exports.getFoods = (req, res) => {
    food.find({cctv_video_no:req.params.cctv}, (err, foods) => {
    if (err) {
      console.log("Error in food.controller: " + err);
      res.status(500).send("Something went wrong");
    } else {
      console.log(foods.length + " foods found!");
      res.status(200).json(foods);
    }
  });
};

module.exports.getAllFoods = (req, res) => {
  food.find((err, foods) => {
  if (err) {
    console.log("Error in food.controller: " + err);
    res.status(500).send("Something went wrong");
  } else {
    console.log(foods.length + " foods found!");
    res.status(200).json(foods);
  }
});
};
