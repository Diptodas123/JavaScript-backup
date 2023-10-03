const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside Promise 1");
            resolve("Promise 1");
        }, 1000);
    });
}
const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside Promise 2");
            resolve("Promise 2");
        }, 5000);
    });
}
const p3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside Promise 3");
            resolve("Promise 3");
        }, 7000);
    });
}
const myFunction = async () => {
    try {
        // const a = await p1();
        // const b = await p2();
        // const c = await p3();
        // console.log(a, b, c);

        //better approach
        const promiseAll = await Promise.all([p1(), p2(), p3()]);
        console.log(promiseAll);
    } catch (err) {
        console.log(err);
    }
}
myFunction();