// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {

  if (error) {

    console.log("It didn't work!" , error);
    return;
  }

  if (typeof ip === 'string') {

    console.log('It worked! Returned IP:' , ip);

    fetchCoordsByIP(ip, (error, coOrds) => {
      if (error) {
        console.log('It didnt work!', error);
      }
      console.log(coOrds);
    });
  }
  
});

// fetchCoordsByIP('123456', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });
