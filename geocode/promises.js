var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve (a+b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

// Chained promise functions, if goes well first call fires, then if goes well, 3rd block fires to run asyncAdd again
// asyncAdd(5, 7).then((res) => {
//     console.log('Result', res);
//     return asyncAdd(res, 33);
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((res) => {
//     console.log('Should be 45 : ', res);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });

//This catch method consolidates error handling from chained promises
asyncAdd(5, 7).then((res) => {
    console.log('Result', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Should be 45 : ', res);
}).catch((errorMessage) => {
    console.log('Error : ', errorMessage);
});


var somePromise = new Promise( (resolve, reject) => {
    // promise can be fulfilled or rejected, is pending then settled
    // removes issues of callbacks being called twice, makes it easier to handle errors and manage outcomes
    setTimeout(() => {
    resolve('Hey. It worked!');
    reject('Sorry. It didn\'t work!');
    }, 2500);
});

somePromise.then((message) => {
    console.log('Success : ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});
