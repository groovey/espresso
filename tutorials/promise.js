let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        // resolve("Success!");
        reject('Fail on error');
    }, 250);
});

myFirstPromise.then((successMessage) => {
    console.log("Yay! " + successMessage);
});

myFirstPromise.catch((error) => {
    new Error("Whoops!");
    // console.log("Ouch! " + error);
});