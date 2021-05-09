const interaction = require("../models/interaction.model");

module.exports.getInteraction = (req, res) => {
  interaction.find((err, data) => {
    if (err) {
      console.log("Error in getInteraction.controller: " + err);
      res.status(500).send("Something went wrong");
    } else {
      console.log(data.length + " interaction data found!");
      res.status(200).json(data);
    }
  });
};
