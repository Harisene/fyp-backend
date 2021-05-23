const faceDetection = require("../models/faceDetection.model");

module.exports.getFaceDetection = (req, res) => {
  faceDetection.find((err, data) => {
    if (err) {
      console.log("Error in getFaceDetection.controller: " + err);
      res.status(500).send("Something went wrong");
    } else {
      console.log(data.length + " face detection data found!");

      if (data.length > 0) {
        let summaryData = [
          {
            person_id: data[0].person_id,
            type: data[0].type,
            date: [data[0].date],
            time: [data[0].time],
            cctv: [data[0].cctv],
          },
        ];
        let flag = false;
        for (let i = 1; i < data.length; i++) {
          flag = false;
          for (let j = 0; j < summaryData.length; j++) {
            if (data[i].person_id === summaryData[j].person_id) {
              summaryData[j].date.push(data[i].date);
              summaryData[j].time.push(data[i].time);
              summaryData[j].cctv.push(data[i].cctv);
              flag = true;
            }
          }
          if (!flag) {
            summaryData.push({
              person_id: data[i].person_id,
              type: data[i].type,
              date: [data[i].date],
              time: [data[i].time],
              cctv: [data[i].cctv],
            });
          }
        }

        console.log(summaryData);

        res.status(200).json(summaryData);
      } else {
        res.status(200).json(data);
      }
    }
  });
};
