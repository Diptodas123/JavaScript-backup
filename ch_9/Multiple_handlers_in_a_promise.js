let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 seconds");
        resolve(56);
    }, 2000)
});
//these two .then() will run independently
p1.then((value) => {
    console.log(value);
});
p1.then((value) => {
    alert(value)
});