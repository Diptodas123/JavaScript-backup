let promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Promise rejected"));
        }, 3000);
    });
}
const myFunction = async () => {
    try {
        let res = await promise();
        console.log(res);
    } catch (error) {
        console.log("This error has been handled");
    }
}
myFunction();