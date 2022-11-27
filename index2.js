// const { response } = require('express');
const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((passTimes) => {
    passTimes.forEach((obj) => {
      const date = new Date(obj.risetime);
      console.log(`Next pass at ${date} for ${obj.duration} seconds`);
    });
  })
  .catch((error) => {
    console.log('It didnt work: ', error);
  })
