const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1");
    }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Value 2")
        reject(new Error("Error at p2"));
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3");
    }, 3000);
});
// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })
//In order to run .then() after the completion of each promise, we can use Promise.all([p1,p2,...])
//this will call then() after all the promises get resolved/rejected
// let promiseAll = Promise.all([p1, p2, p3]);
// promiseAll.then((value) => {  //executed only after all the promises get fulfilled/rejected
//     console.log(value);
// });

let promises = Promise.allSettled([p1, p2, p3]);
promises.then((value) => {  //returns the status and values of each promise
    console.log(value);
});

// let promises = Promise.race([p1, p2, p3]);
// promises.then((value) => {  //returns the fastest promise from a list of promises, the result can be either of fulfilled/rejected
//     console.log(value);
// });

// let promises = Promise.any([p1, p2, p3]);
// promises.then((value) => {  //returns the first promise that gets resolved and ignores the rejected ones
//     console.log(value);
// });