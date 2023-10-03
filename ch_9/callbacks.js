/*synchronous program

let a=prompt("What is your name?");
let b=prompt("What is your age?");
console.log(`${a} is ${b} years old`);

This is an example of synchronous program as the program excution will be halted during the user input
*/

/*Asynchronous program

console.log("Start");
setTimeout(()=>{
    console.log("In setTimeout block");
},3000);
console.log("End");

This is an example of Asynchronous program as the execution will not stop 
during the setTimeout section, on that time the block of setTimeout will be 
scheduled to be executed after the passed timeout and in the meantime the later codes will be executed
*/

//callback
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with src : " + src);
        callback(null, src);
    }
    script.onerror = function () {
        console.log("Error loading script with src: " + src);
        callback(new Error("Src got some error"), src);
    }
    document.head.appendChild(script);

}
function myFunction(e, src) {
    if (e) {
        console.log(e);
        return;
    }
    alert("Hello world! " + src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", myFunction);