const p = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000)
    })
}
(async () => {
    let text = await p("Hello");
    console.log(text);
    text = await p("World");
    console.log(text);
})();