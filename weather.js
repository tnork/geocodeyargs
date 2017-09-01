// Use in command line such as (Windows):
// node weather --a "any address in string format"

const _ = require('lodash');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to retrieve weather information about, include string --address="120 Road Boston MA" ',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// console.log(argv);

geocode.geocodeAddress(argv.address, function(errorMessage, results) {
   if (errorMessage) {
       console.log(errorMessage);
   } else {
       console.log(JSON.stringify(results));
   }
});




// node weather --address 'x'

// C:\Users\tyler\Desktop\NodeTest\ExpressTest1\WeatherApp>node
// > encodeURIComponent('400 Street Name San Francisco')
// '400%20Street%20Name%20San%20Francisco'
// > decodeURIComponent('400%20Street%20Name%20San%20Francisco')
// '400 Street Name San Francisco'
// >