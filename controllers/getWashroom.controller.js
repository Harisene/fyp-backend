const washroom = require("../models/washroom.model");

module.exports.getWashroom = (req, res) => {
  washroom.find((err, data) => {
    if (err) {
      console.log("Error in getWashroomData.controller: " + err);
      res.status(500).send("Something went wrong");
    } else {
      console.log(data.length + " washroom data found!");
      res.status(200).json(data);
    }
  });
};
