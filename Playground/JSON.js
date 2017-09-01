const os = require('os');
// const fs = require('fs');


var obj = {
    name: 'Tyler'
};

var stringObj = JSON.stringify(obj);  // stringify converts JS object to JSON string
console.log(typeof(stringObj)); // string
console.log(stringObj); // {"name":"Tyler"}

var personString = '{"name": "Tyler", "age": 32, "location-city": "Redwood City"}';
var personInJSON = JSON.parse(personString);
console.log(typeof(personInJSON));
console.log(personInJSON); // parse back to Javascript Object

var personString = JSON.stringify(personInJSON); // Back to JSON object
// console.log(personString);

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote); //Turns to JSON string
fs.writeFileSync('./notes.json', originalNoteString);

var noteString = fs.readFileSync('./notes.json');  // Reads JSON, parses back to JS object object.title, object.body
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);