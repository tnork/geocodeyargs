// // node inspect playground/debugging.js     can also use  nodemon inspect blah
// list(10)
// n   next
// c   continue to run rest of all lines
// repl      read evaluate print loop, can get value of an object at that point in time

// Can use statement   debugger;       creates a break point in the debugger so can begin and hit c to get to that line

// nodemon --inspect-brk playground/debugging.js
// Goes to Chrome Developer Tools chrome://inspect/#devices


var person = {
    name: "Tyler"
};

person.age = 32;
debugger;
person.lastName = "Norkus";
console.log(person);

