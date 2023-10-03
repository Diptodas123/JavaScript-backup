async function weather() {  //returns a promise
    const delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Degree");
        }, 2000);
    });
    const bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Degree");
        }, 5000);
    });
    console.log("Fetching data from Delhi, Please wait...");
    let delhiW = await delhiWeather;    //until and unless delhiWeather gets fulfilled, the execution will be halted
    console.log("Fetched data from Delhi:"+delhiW);
    console.log("Fetching data from Bangalore, Please wait...");
    let bangaloreW = await bangaloreWeather;    //Similarly,until and unless bangaloreWeather gets fulfilled, the execution will be halted
    console.log("Fetched data from Bangalore:"+bangaloreW);
    return [delhiW,bangaloreW];
}
weather().then((value)=>{
    console.log(value);
})