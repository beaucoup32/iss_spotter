// index.js
const { nextISSTimesForMyLocation } = require("./iss");

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  passTimes.forEach(obj => {
    const date = new Date(obj.risetime);
    console.log(`Next pass at ${date} for ${obj.duration} seconds`);
  });
});
