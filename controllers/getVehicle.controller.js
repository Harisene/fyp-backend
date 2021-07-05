const vehicle = require("../models/vehicle.model");

module.exports.getVehicle = (req, res) => {
  vehicle.find((err, data) => {
    if (err) {
      console.log("Error in getVehicleData.controller: " + err);
      res.status(500).send("Something went wrong");
    } else {
      console.log(data.length + " vehicle data found!");
      // console.log(data);
      res.status(200).json(data);
      // let filteredData = data.filter((d) => d.date === "2021-05-30");
      // console.log(filteredData.sort(compare));
    }
  });
};
