const request = require('request');

module.exports.geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.weatherRequest = (lat, long) => {

    var url = 'https://api.darksky.net/forecast/8b7a54c97d1438220cbb8d4a6f077726/' + lat + ',' + long;

    request({
        url: url,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode == 200) {
            // console.log('Printing body : ', JSON.stringify(body, undefined, 2));
            console.log(`Current Temperature : ${body.currently.temperature}`);
            console.log(`Summary : ${body.currently.summary}`);
        } else {
            console.log('Unable to connect to Forecast.io server or to retrieve weather data.');
        }
    });
};