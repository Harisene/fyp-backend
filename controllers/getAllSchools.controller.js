const school = require("../models/schools.model");

module.exports.getAllSchools = (req, res) => {
  school.find((err, schools) => {
    if (err) {
      console.log("Error in getAllSchools.controller: " + err);
      res.status(500).send("Something went wrong");
    } else {
      console.log(schools.length + " schools found!");
      res.status(200).json(schools);
    }
  });
};
