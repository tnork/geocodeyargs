// Use in command line such as (Windows):
// node weather --a "any address in string format"

const request = require('request');
const _ = require('lodash');
const yargs = require('yargs');

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

var encodedURL = encodeURIComponent(argv.address);

var concatURL = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodedURL;
console.log(concatURL);


request( {
    url: concatURL,
    json: true
}, (error, response, body) => {
    // console.log('Printing response : ', JSON.stringify(response, undefined, 2));
        // response.statusCode 404 not found 500 server crashed, 200 good
        // response.headers.content-type can set headers for requests and response
        // errors can reveal connection or domain issues, look for code
        // body.results[0].JSONelement

    if(error) { // Connect failure is in the error object
        console.log('Unable to connect to Google Servers');
    } else if (body.status === "ZERO_RESULTS") { // Zero results from Google is in the response object
        console.log('Unable to find any results for that address from Google Maps');
    } else if (body.status === "OK") {
        console.log('Printing body : ', JSON.stringify(body, undefined, 2));
        console.log(`Formatted address ${body.results[0].formatted_address}`);
        console.log(`Latitude : ${body.results[0].geometry.location['lat']}`);
        console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
    }
});



// node weather --address 'x'

// C:\Users\tyler\Desktop\NodeTest\ExpressTest1\WeatherApp>node
// > encodeURIComponent('400 Street Name San Francisco')
// '400%20Street%20Name%20San%20Francisco'
// > decodeURIComponent('400%20Street%20Name%20San%20Francisco')
// '400 Street Name San Francisco'
// >