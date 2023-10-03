let p1 = new Promise(function (resolve, reject) {
    console.log("Promise is pending");
    setTimeout(() => {
        // console.log("I am a promise and I am resolved");
        resolve(true);
    }, 5000);
});

let p2 = new Promise(function (resolve, reject) {
    console.log("Promise is pending");
    setTimeout(() => {
        // console.log("I am a promise and I am rejected");
        reject(new Error("I am an Error"));
    }, 5000);
});
p1.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});
p2.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log("Some error occurred in p2");
});

//we can also handle error from then() like this-
p1.then((value)=>{
    console.log(value);
},(error)=>{
    console.log("Some error occurred in p1");
});