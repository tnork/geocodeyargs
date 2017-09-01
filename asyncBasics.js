console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Callback 2');
}, 0);

console.log('Ending app');

//

var getUser = (id, callback) => { // Function creates id then callback
    var user = {
        id: id,
        name: "Vikram"
    };
    setTimeout(() => {
        console.log('Delay inside of function (i.e. fetching data from db or http endpoint');
    }, 2000);

    callback(user);  //allows us to run the function after user data comes back to the callback function, then
};                    // can do something with the data


getUser(111, (userObject) => { // Callback function
    console.log(userObject);
});