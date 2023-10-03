//Following two lines will run successfully due to hoisting
console.log(a); //undefined as var a is hoisted but not initialized by the JavaScript engine
greet();

function greet() {
    console.log("good morning");
}
var a = 9;  //declaration hoisted to the top but initialization is not done
console.log(a);


// console.log(b);  //error if let or const is used to declare a variable
let b=45;

// myFunction();   //function expressions and class expressions are not hoisted
const myFunction=()=>{
    console.log("myFunction");
}