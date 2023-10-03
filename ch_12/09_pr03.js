const p = (n=1) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n);
        }, n*1000);
    })
}
(async () => {
    let value = await p(1);
    console.log(value);
    value = await p(2);
    console.log(value);
    value = await p(3);
    console.log(value);
    value = await p(4);
    console.log(value);
    value = await p();
    console.log(value);
})();