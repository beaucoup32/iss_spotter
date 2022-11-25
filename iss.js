const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = function (callback) {
  request("https://api.ipify.org?format=json", (err, response, body) => {

    if (err) {
      
      callback(err, null);
      return;
    }
    
    if (response.statusCode !== 200) {

      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    
    callback(err, ip);
 
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (err, body) => {
    if (err) {

      callback(err, null);
      return;
    }
    let data = JSON.parse(body.body);

    if (!data.success) {

      const message = `Success status was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`;
      callback(Error(message), null);
      return;
    }
    
    const { latitude, longitude } = data;
    
    callback(err, { latitude, longitude });
    
  })
}

module.exports = { fetchMyIP, fetchCoordsByIP };
