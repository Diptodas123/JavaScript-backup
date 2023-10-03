const a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    })
};
//using IIFE
(async()=>{
    let b=await Promise.all([a(),a(),a()]);
    console.log(b);
})();

// const f = async () => {
//     let b = await Promise.all([a(), a(), a()]);
//     console.log(b);
// }
// f()
