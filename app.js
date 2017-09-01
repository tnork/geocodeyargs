const yargs = require('yargs');
const request = require('request');

const geocode = require('./geocode/geocode');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    // console.log(JSON.stringify(results, undefined, 2));
    console.log('LAT : ', results.latitude);
    console.log('LNG : ', results.longitude);
    console.log('');
    var lat = results.latitude;
    var long = results.longitude;
    geocode.weatherRequest(lat, long);
  }
});



