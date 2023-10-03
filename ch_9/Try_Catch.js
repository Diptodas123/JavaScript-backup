try {
    setTimeout(() => {
        console.log("Fetching data, please Wait....");
    }, 1000);
    setTimeout(() => {
        console.log("Data successfully fetched");
    }, 3000);
    setTimeout(() => {
        console.log("Displaying fetched data");
    }, 5000);
} catch (error) {
    console.log("Something went wrong" + error);
}

/*catch will be useful only if there's error in the synchronous code but 
it won't be able catch the errors from scheduled code, i.e.,
if there's an error in any of the blocks of setTimeout() then outer try-catch won't be 
enough for error handling as before executing the scheduled code the js engine will be already out of the 
try-catch block. Therefor, to catch errors in scheduled code there should be inner try-catch blocks like this...
try {
    setTimeout(()=>{
            try{
                console.log(new Error("Some error"));
            }catch(error){
                console.log(error);
            }
        },1000);
}catch(error){
    console.log("Something went wrong" + error);
}
*/