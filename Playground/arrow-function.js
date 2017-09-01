const nodemon = require('nodemon');

var square = (x) => {
   var result = x * x;
   return result;
};

// Same syntax.   Downside is does not have this binding
// var square = (x) => x*x;

console.log(square(7));

var user = {
  name: 'Tyler',
  sayHi: () => {
      console.log(`Hi I'm ${this.name}`); //Doesn't work
  },
    sayHiAlt () {
        console.log(`Hi I'm ${this.name}`);
    }
};

user.sayHiAlt();